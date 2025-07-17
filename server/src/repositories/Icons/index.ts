import { prisma } from '../../config/Repository';
import { GetIconsToInsert } from '../../scripts/Icons';
import {
  ThrowRepositoryException,
  ThrowConflictException,
} from '../../utils/Functions';

export const GetIconsRepository = async (route: string) => {
  try {
    const icons = await prisma.icons.findMany();

    return icons;
  } catch (error) {
    ThrowRepositoryException(error, route);
  }
};

export const CreateIconsRepository = async (route: string) => {
  const iconsToInsert = GetIconsToInsert();

  try {
    const existingIcons = await GetIconsRepository(route);

    const existingIconsDescription = new Set(
      existingIcons?.map(existingIcon =>
        existingIcon.description.toLowerCase().trim(),
      ),
    );

    const iconsToBeInsert = iconsToInsert.filter(
      iconToInsert =>
        !existingIconsDescription.has(
          iconToInsert.description.toLowerCase().trim(),
        ),
    );

    if (iconsToBeInsert.length === 0) {
      ThrowConflictException(route);
    }

    const iconsInserted = await prisma.$transaction(async tx => {
      const inserted = [];

      for (const icon of iconsToBeInsert) {
        const iconToInsert = await tx.icons.create({
          data: icon,
        });

        inserted.push(iconToInsert);
      }

      return inserted;
    });

    return iconsInserted;
  } catch (error) {
    ThrowRepositoryException(error, route);
  }
};
