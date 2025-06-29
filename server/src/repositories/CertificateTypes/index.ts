import { prisma } from '../../config/Repository';

export const GetCertificateTypesRepository = async () => {
  try {
    const certificateTypes = await prisma.certificateTypes.findMany();

    return certificateTypes;
  } catch (error) {}
};
