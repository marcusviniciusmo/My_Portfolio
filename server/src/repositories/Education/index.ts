import { prisma } from '../../config/Repository';
import { GetEducationByUserToInsert } from '../../scripts/Education';
import {
  ThrowConflictException,
  ThrowRepositoryException,
} from '../../utils/Functions';

export const GetEducationByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const educationByUser = await prisma.education.findMany({
      where: { user_ID: userId },
    });

    return educationByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

export const CreateEducationByUserRepository = async (
  route: string,
  userId: string,
) => {
  const educationByUserToInsert = GetEducationByUserToInsert(userId);

  try {
    const existingEducationByUser = await GetEducationByUserRepository(
      route,
      userId,
    );

    const existingEducationTitleByUser = new Set(
      existingEducationByUser?.map(existingEducationTitle =>
        existingEducationTitle.title.toLowerCase().trim(),
      ),
    );

    const educationToInsert = educationByUserToInsert.filter(
      educationToBeInsert =>
        !existingEducationTitleByUser.has(
          educationToBeInsert.title.toLowerCase().trim(),
        ),
    );

    if (educationToInsert.length === 0) {
      ThrowConflictException(route, userId);
    }

    const educationByUserInserted = await prisma.$transaction(async tx => {
      const inserted = [];

      for (const education of educationToInsert) {
        const educationToBeInsert = await tx.education.create({
          data: education,
        });

        inserted.push(educationToBeInsert);
      }

      return inserted;
    });

    return educationByUserInserted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
