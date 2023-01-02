import { object, string } from 'yup';
import { USERROLES } from '../../../../constants';

export const getInitialProps = (sector) =>
    sector && Object.keys(sector).length > 0
        ? {
              englishName: sector.englishName,
              arabicName: sector.arabicName,
              Logo: sector.Logo,
              isActive: sector.isActive,
              isDeleted: sector.isDeleted,
              id: sector.id,
          }
        : {
              englishName: '',
              arabicName: '',
              Logo: '',
              isActive: true,
          };

export const validationSchema = object({
    arabicName: string().required(),
    englishName: string().required(),
    Logo: string().url().required('Please enter correct URL'),
});
