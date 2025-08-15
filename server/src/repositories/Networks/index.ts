import { prisma } from '../../config/Repository';
import { GetIconsRepository } from '../Icons';
import { GetNetworksByUserToInsert } from '../../scripts/Networks';
import {
  ThrowRepositoryException,
  ThrowConflictException,
} from '../../utils/Functions';

export const GetNetworksByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const networksByUser = await prisma.networks.findMany({
      where: { user_ID: userId },
      include: {
        icon_ID: true,
      },
    });

    const networksByUserFormatted = networksByUser.map(network => ({
      ...network,
      icon: network.icon_ID.description,
      icon_ID: undefined,
    }));

    return networksByUserFormatted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

export const CreateNetworksByUserRepository = async (
  route: string,
  userId: string,
) => {
  const networksByUserToInsert = GetNetworksByUserToInsert(userId);

  try {
    const existingNetworksByUser = await GetNetworksByUserRepository(
      route,
      userId,
    );

    const existingNetworksTitlesByUser = new Set(
      existingNetworksByUser?.map(existingNetwork =>
        existingNetwork.title.toLowerCase().trim(),
      ),
    );

    const existingIcons = await GetIconsRepository(route);
    const existingIconsDescription = new Map(
      existingIcons?.map(existingIcon => [
        existingIcon.description.toLowerCase().trim(),
        existingIcon.id,
      ]),
    );

    const networksToInsert = networksByUserToInsert.filter(
      networkToInsert =>
        !existingNetworksTitlesByUser.has(
          networkToInsert.title.toLowerCase().trim(),
        ),
    );

    if (networksToInsert.length === 0) {
      ThrowConflictException(route, userId);
    }

    const networksByUserInserted = await prisma.$transaction(async tx => {
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

      for (const network of networksToInsert) {
        const iconId = await insertIconIfNoExists(network.icon);

        const networkToInsert = await tx.networks.create({
          data: {
            ...network,
            icon: iconId as string,
          },
        });

        inserted.push(networkToInsert);
      }

      return inserted;
    });

    return networksByUserInserted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
