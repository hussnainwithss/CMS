import { object, string, number } from 'yup';

export const getInitialProps = (entity) =>
    entity && Object.keys(entity).length > 0
        ? {
              id: entity.id,
              englishName: entity.englishName,
              arabicName: entity.arabicName,
              Logo: entity.Logo,
              isActive: entity.isActive,
              isDeleted: entity.isDeleted,
              entityTypeId: entity.entityType.id,
              sectorId: entity.sector.id,
              IsoCode: entity.IsoCode,
          }
        : {
              englishName: '',
              arabicName: '',
              Logo: '',
              entityTypeId: 0,
              sectorId: 0,
              isActive: true,
              IsoCode: '',
          };

export const validationSchema = object({
    arabicName: string().required(),
    englishName: string().required(),
    Logo: string().url().required(),
    entityTypeId: number().required().notOneOf([0], 'Please Select Entity Type'),
    sectorId: number().required().notOneOf([0], 'Please Select Sector'),
    IsoCode: string().required(),
});
