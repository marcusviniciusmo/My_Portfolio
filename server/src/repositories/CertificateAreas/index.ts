import { prisma } from '../../config/Repository';

export const GetCertificateAreasRepository = async () => {
  try {
    const certificateAreas = await prisma.certificateAreas.findMany();

    return certificateAreas;
  } catch (error) {}
};
