import { prisma } from '../../config/Repository';
import { GetCertificateAreasToInsert } from '../../scripts/CertificateAreas';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetCertificateAreasRepository = async (route: string) => {
  try {
    const certificateAreas = await prisma.certificateAreas.findMany();

    return certificateAreas;
  } catch (error) {
    ThrowRepositoryException(error, route);
  }
};

export const CreateCertificateAreasRepository = async (route: string) => {
  const certificateAreasToInsert = GetCertificateAreasToInsert();

  try {
    const existingCertificateAreas = await GetCertificateAreasRepository(route);

    const existingCertifcateAreasDescription = new Set(
      existingCertificateAreas?.map(existingCertificateArea =>
        existingCertificateArea.areaDescription.toLowerCase().trim(),
      ),
    );

    const areasToInsert = certificateAreasToInsert.filter(
      areaToInsert =>
        !existingCertifcateAreasDescription.has(
          areaToInsert.areaDescription.toLowerCase().trim(),
        ),
    );

    const certificateAreasInserted = await prisma.$transaction(async tx => {
      const inserted = [];

      for (const area of areasToInsert) {
        const areaToInsert = await tx.certificateAreas.create({
          data: area,
        });

        inserted.push(areaToInsert);
      }

      return inserted;
    });

    return certificateAreasInserted;
  } catch (error) {}
};
