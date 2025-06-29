import { prisma } from '../../config/Repository';
import { GetCertificateTypesToInsert } from '../../scripts/CertificateTypes';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetCertificateTypesRepository = async (route: string) => {
  try {
    const certificateTypes = await prisma.certificateTypes.findMany();

    return certificateTypes;
  } catch (error) {
    ThrowRepositoryException(error, route);
  }
};

export const CreateCertificateTypesRepository = async (route: string) => {
  const certificateTypesToInsert = GetCertificateTypesToInsert();

  try {
    const exisitingCertificateTypes = await GetCertificateTypesRepository(
      route,
    );

    const existingCertificateTypesDescription = new Set(
      exisitingCertificateTypes?.map(existingCertificateType =>
        existingCertificateType.typeDescription.toLowerCase().trim(),
      ),
    );

    const typesToInsert = certificateTypesToInsert.filter(
      typeToInsert =>
        !existingCertificateTypesDescription.has(
          typeToInsert.typeDescription.toLowerCase().trim(),
        ),
    );

    const certificateTypesInserted = await prisma.$transaction(async tx => {
      const inserted = [];

      for (const type of typesToInsert) {
        const typeToInsert = await tx.certificateTypes.create({
          data: type,
        });

        inserted.push(typeToInsert);
      }

      return inserted;
    });

    return certificateTypesInserted;
  } catch (error) {}
};
