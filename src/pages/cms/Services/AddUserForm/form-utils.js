import { object, string } from 'yup';
import { USERROLES } from '../../../../constants';

export const getInitialProps = (user) =>
    user && Object.keys(user).length > 0
        ? {
              email: user.email,
              name: user.name,
              role: user.role,
              id: user.id,
              isActive: user.isActive,
              isDeleted: user.isDeleted,
          }
        : {
              englishName: '',
              arabicName: '',
              sector: 'Education',
              channelCategory: ['E-platform'],
              channelType: ['LMS'],
            //   survey: 'Select Survey',
              isActive: true,
              survey: 'education survey 1',
              useDefaultSurvey: true,
          };

export const validationSchema = object({
    // email: string()
    //     .email()
    //     .required()
    //     .matches(
    //         '^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+.)?[a-zA-Z]+.)?(adaa.gov.sa)$',
    //         'Only Adaa registered emails allowed',
    //     ),
    // name: string().required(),
    // role: string()
    //     .required()
    //     .oneOf(
    //         Object.keys(USERROLES),
    //         'User Role must be one of the following values: Administrator, Viewer, Content Manager',
    //     ),
});
