import { prisma } from '../../config/Repository';
import { GetCertificateAreasRepository } from '../CertificateAreas';
import { GetCertificateTypesRepository } from '../CertificateTypes';
import { GetCertificatesByUserToInsert } from '../../scripts/Certificates';
import {
  ThrowRepositoryException,
  ThrowConflictException,
} from '../../utils/Functions';

export const GetCertificatesByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const certificatesByUser = await prisma.certificates.findMany({
      where: { user_ID: userId },
      include: {
        area_ID: true,
        type_ID: true,
      },
    });

    const certificatesByUserFormatted = certificatesByUser.map(certificate => ({
      ...certificate,
      area: certificate.area_ID.areaDescription,
      area_ID: undefined,
      type: certificate.type_ID.typeDescription,
      type_ID: undefined,
    }));

    return certificatesByUserFormatted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};

export const CreateCertificatesByUserRepository = async (
  route: string,
  userId: string,
) => {
  const certificatesByUserToInsert = GetCertificatesByUserToInsert(userId);

  try {
    const existingCertificatesByUser = await GetCertificatesByUserRepository(
      route,
      userId,
    );

    const existingCertificatesNamesByUser = new Set(
      existingCertificatesByUser?.map(existingCertificateByUser =>
        existingCertificateByUser.name.toLowerCase().trim(),
      ),
    );

    const existingCertificateAreas = await GetCertificateAreasRepository(route);
    const existingCertificateAreasDescription = new Map(
      existingCertificateAreas?.map(existingArea => [
        existingArea.areaDescription.toLowerCase().trim(),
        existingArea.id,
      ]),
    );

    const existingCertificateTypes = await GetCertificateTypesRepository(route);
    const existingCertificateTypesDescription = new Map(
      existingCertificateTypes?.map(existingType => [
        existingType.typeDescription.toLowerCase().trim(),
        existingType.id,
      ]),
    );

    const certificatesToInsert = certificatesByUserToInsert.filter(
      certificateToInsert =>
        !existingCertificatesNamesByUser.has(
          certificateToInsert.name.toLowerCase().trim(),
        ),
    );

    if (certificatesToInsert.length === 0) {
      ThrowConflictException(route, userId);
    }

    const certificatesByUserInserted = await prisma.$transaction(async tx => {
      const insertCertificateAreaIfNoExists = async (
        certificateArea: string,
      ) => {
        const areaToInsert = certificateArea.toLowerCase().trim();

        if (!existingCertificateAreasDescription.has(areaToInsert)) {
          const newArea = await tx.certificateAreas.create({
            data: { areaDescription: certificateArea },
          });

          existingCertificateAreasDescription.set(areaToInsert, newArea.id);

          return newArea.id;
        }

        return existingCertificateAreasDescription.get(areaToInsert);
      };

      const insertCertificateTypeIfNoExists = async (
        certificateType: string,
      ) => {
        const typeToInsert = certificateType.toLowerCase().trim();

        if (!existingCertificateTypesDescription.has(typeToInsert)) {
          const newType = await tx.certificateTypes.create({
            data: { typeDescription: certificateType },
          });

          existingCertificateTypesDescription.set(typeToInsert, newType.id);

          return newType.id;
        }

        return existingCertificateTypesDescription.get(typeToInsert);
      };

      const inserted = [];

      for (const certificate of certificatesToInsert) {
        const areaId = await insertCertificateAreaIfNoExists(certificate.area);
        const typeId = await insertCertificateTypeIfNoExists(certificate.type);

        const certificateToInsert = await tx.certificates.create({
          data: {
            ...certificate,
            area: areaId as string,
            type: typeId as string,
          },
        });

        inserted.push(certificateToInsert);
      }

      return inserted;
    });

    return certificatesByUserInserted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
