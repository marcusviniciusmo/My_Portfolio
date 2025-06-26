import { prisma } from '../../config/Repository';
import { GetProfileToInsert } from '../../scripts/Profile';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetProfileByIdRepository = (route: string, userId: string) => {
  try {
    const profileById = prisma.profile.findUnique({
      where: { user_ID: userId },
    });

    return profileById;
  } catch (error) {
    ThrowRepositoryException(route, userId);
  }
};

export const CreateProfileRepository = async (route: string) => {
  const profileToInsert = GetProfileToInsert();

  try {
    const profileInserted = await prisma.$transaction(async tx => {
      return await tx.profile.create({
        data: profileToInsert,
      });
    });

    return profileInserted;
  } catch (error) {
    ThrowRepositoryException(route);
  }
};
