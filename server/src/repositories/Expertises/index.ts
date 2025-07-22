import { prisma } from '../../config/Repository';
import { GetIconsRepository } from '../Icons';
import { GetExpertisesByUserToInsert } from '../../scripts/Expertises';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetExpertisesByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const expertisesByUser = await prisma.expertises.findMany({
      where: { user_ID: userId },
      include: {
        icon_ID: true,
      },
    });

    const expertisesByUserFormatted = expertisesByUser.map(expertise => ({
      ...expertise,
      icon: expertise.icon_ID.description,
      icon_ID: undefined,
    }));

    return expertisesByUserFormatted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

export const CreateExpertisesByUserRepository = async (
  route: string,
  userId: string,
) => {
  const expertisesByUserToInsert = GetExpertisesByUserToInsert(userId);

  try {
    const existingExpertisesByUser = await GetExpertisesByUserRepository(
      route,
      userId,
    );

    const existingExpertisesTitleByUser = new Set(
      existingExpertisesByUser?.map(existingExpertiseTitle =>
        existingExpertiseTitle.title.toLowerCase().trim(),
      ),
    );

    const existingIcons = await GetIconsRepository(route);
    const existingIconDescriptions = new Map(
      existingIcons?.map(existingIcon => [
        existingIcon.description.toLowerCase().trim(),
        existingIcon.id,
      ]),
    );

    const expertisesToInsert = expertisesByUserToInsert.filter(
      expertiseToInsert =>
        !existingExpertisesTitleByUser.has(
          expertiseToInsert.title.toLowerCase().trim(),
        ),
    );

    const expertisesByUserInserted = await prisma.$transaction(async tx => {
      const insertIconIfNoExists = async (iconDescription: string) => {
        const iconToInsert = iconDescription.toLowerCase().trim();

        if (!existingIconDescriptions.has(iconToInsert)) {
          const newIcon = await tx.icons.create({
            data: { description: iconDescription },
          });

          existingIconDescriptions.set(iconToInsert, newIcon.id);

          return newIcon.id;
        }

        return existingIconDescriptions.get(iconToInsert);
      };

      const inserted = [];

      for (const expertise of expertisesToInsert) {
        const iconId = await insertIconIfNoExists(expertise.icon);

        const expertiseToInsert = await tx.expertises.create({
          data: {
            ...expertise,
            icon: iconId as string,
          },
        });

        inserted.push(expertiseToInsert);
      }

      return inserted;
    });

    return expertisesByUserInserted;
  } catch (error) {}
};
