import { object, string } from 'yup';

export const getInitialProps = (entityType) =>
    entityType && Object.keys(entityType).length > 0
        ? {
              arabicName: entityType.arabicName,
              englishName: entityType.englishName,
              id: entityType.id,
              isActive: entityType.isActive,
          }
        : { arabicName: '', englishName: '', isActive: true };

export const validationSchema = object({
    arabicName: string().required(),
    englishName: string().required(),
});
