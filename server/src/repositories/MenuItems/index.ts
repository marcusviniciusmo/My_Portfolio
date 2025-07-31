import { prisma } from '../../config/Repository';
import { GetIconsRepository } from '../Icons';
import { GetMenuItemsByUserToInsert } from '../../scripts/MenuItems';
import {
  ThrowRepositoryException,
  ThrowConflictException,
} from '../../utils/Functions';

export const GetMenuItemsByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const menuItemsByUser = await prisma.menuItems.findMany({
      where: { user_ID: userId },
    });

    return menuItemsByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

export const CreateMenuItemsByUserRepository = async (
  route: string,
  userId: string,
) => {
  const menuItemsByUserToInsert = GetMenuItemsByUserToInsert(userId);

  try {
    const existingMenuItemsByUser = await GetMenuItemsByUserRepository(
      route,
      userId,
    );

    const existingMenuItemsLabelsByUser = new Set(
      existingMenuItemsByUser?.map(existingMenuItem =>
        existingMenuItem.label.toLowerCase().trim(),
      ),
    );

    const existingIcons = await GetIconsRepository(route);
    const existingIconsDescription = new Map(
      existingIcons?.map(existingIcon => [
        existingIcon.description.toLowerCase().trim(),
        existingIcon.id,
      ]),
    );

    const menuItemsToInsert = menuItemsByUserToInsert.filter(
      menuItemToInsert =>
        !existingMenuItemsLabelsByUser.has(
          menuItemToInsert.label.toLowerCase().trim(),
        ),
    );

    if (menuItemsToInsert.length === 0) {
      ThrowConflictException(route, userId);
    }

    const menuItemsByUserInserted = await prisma.$transaction(async tx => {
      const insertIconIfNoExists = async (icon: string) => {
        const iconToInsert = icon.toLowerCase().trim();

        if (!existingIconsDescription.has(iconToInsert)) {
          const newIcon = await tx.icons.create({
            data: { description: icon },
          });

          existingIconsDescription.set(iconToInsert, newIcon.id);

          return newIcon.id;
        }

        return existingIconsDescription.get(iconToInsert);
      };

      const inserted = [];

      for (const menuItem of menuItemsToInsert) {
        const iconId = await insertIconIfNoExists(menuItem.icon);

        const menuItemToInsert = await tx.menuItems.create({
          data: {
            ...menuItem,
            icon: iconId as string,
          },
        });

        inserted.push(menuItemToInsert);
      }

      return inserted;
    });

    return menuItemsByUserInserted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
