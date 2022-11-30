import { object, string } from 'yup';

export const getInitialProps = (language) =>
    language && Object.keys(language).length > 0
        ? {
              arabicName: language.arabicName,
              englishName: language.englishName,
              id: language.id,
              isActive: language.isActive,
              isRTL: language.isRTL,
              isDefault: language.isDefault,
              isDeleted: language.isDeleted,
              isTranslated: language.isTranslated
          }
        : {
              arabicName: '',
              englishName: '',
              isActive: true,
              isRTL: true,
              isDefault: false,
              isTranslated: false,
          };

export const validationSchema = object({
    arabicName: string().required(),
    englishName: string().required(),
});
