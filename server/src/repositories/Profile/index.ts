import { prisma } from '../../config/Repository';
import { GetProfileToInsert } from '../../scripts/Profile';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetProfileByIdRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const profileById = await prisma.profile.findUnique({
      where: { user_ID: userId },
    });

    return profileById;
  } catch (error) {
    ThrowRepositoryException(route, userId);
  }
};

export const CreateProfileRepository = async () => {
  const profileToInsert = GetProfileToInsert();

  try {
    const profileInserted = await prisma.profile.create({
      data: profileToInsert,
    });

    return profileInserted;
  } catch (error) {}
};
