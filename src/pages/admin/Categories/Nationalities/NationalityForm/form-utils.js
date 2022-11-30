import { object, string } from 'yup';

export const getInitialProps = (nationality) =>
    nationality && Object.keys(nationality).length > 0
        ? {
              arabicName: nationality.arabicName,
              englishName: nationality.englishName,
              id: nationality.id,
              isActive: nationality.isActive,
              isDeleted: nationality.isDeleted,
          }
        : { arabicName: '', englishName: '', isActive: true };

export const validationSchema = object({
    arabicName: string().required(),
    englishName: string().required(),
});
