import { prisma } from '../../config/Repository';
import { GetExperiencesByUserToInsert } from '../../scripts/Experiences';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetExperiencesByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const experiencesByUser = await prisma.experiences.findMany({
      where: { user_ID: userId },
    });

    return experiencesByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

export const CreateExperiencesByUserRepository = async (
  route: string,
  userId: string,
) => {
  const experiencesByUserToInsert = GetExperiencesByUserToInsert(userId);

  try {
    const existingExperiencesByUser = await GetExperiencesByUserRepository(
      route,
      userId,
    );

    const existingExperiencesTitleByUser = new Set(
      existingExperiencesByUser?.map(existingExperienceTitle =>
        existingExperienceTitle.title.toLowerCase().trim(),
      ),
    );

    const experiencesToInsert = experiencesByUserToInsert.filter(
      experienceToInsert =>
        !existingExperiencesTitleByUser.has(
          experienceToInsert.title.toLowerCase().trim(),
        ),
    );

    const experiencesByUserInserted = await prisma.$transaction(async tx => {
      const inserted = [];

      for (const experience of experiencesToInsert) {
        const experienceToInsert = await tx.experiences.create({
          data: experience,
        });

        inserted.push(experienceToInsert);
      }

      return inserted;
    });

    return experiencesByUserInserted;
  } catch (error) {}
};
