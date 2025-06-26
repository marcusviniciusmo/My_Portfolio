import { prisma } from "../../config/Repository";

export const GetProfileByIdRepository = (userId: string) => {
  try {
    const profileById = prisma.profile.findUnique({
      where: { user_ID: userId },
    });

    return profileById;
  } catch (error) {}
};
