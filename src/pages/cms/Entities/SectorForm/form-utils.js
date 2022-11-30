import { object, string } from 'yup';
import { USERROLES } from '../../../../constants';

export const getInitialProps = (sector) =>
    sector && Object.keys(sector).length > 0
        ? {
              englishName: sector.englishName,
              arabicName: sector.arabicName,
              imageURL: sector.imageURL,
              isActive: sector.isActive,
              id: sector.id,
          }
        : {
              englishName: '',
              arabicName: '',
              imageURL: '',
              isActive: true,
          };

export const validationSchema = object({
    arabicName: string().required(),
    englishName: string().required(),
    imageURL: string().url().required('Please enter correct URL'),
});
