import { prisma } from '../../config/Repository';
import { GetEducationByUserToInsert } from '../../scripts/Education';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetEducationByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const educationByUser = await prisma.education.findMany({
      where: { user_ID: userId },
    });

    const educationByUserFormatted = educationByUser.map(education => ({
      ...education,
      id: education.education_ID,
      education_ID: undefined,
    }));

    return educationByUserFormatted;
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
  } catch (error) {}
};
