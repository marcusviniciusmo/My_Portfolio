import { prisma } from '../../config/Repository';

export const GetCertificatesByUserRepository = async (userId: string) => {
  try {
    const certificatesByUser = await prisma.certificates.findMany({
      where: { user_ID: userId },
      include: {
        area_ID: true,
        type_ID: true,
      },
    });

    return certificatesByUser;
  } catch (error) {}
};
