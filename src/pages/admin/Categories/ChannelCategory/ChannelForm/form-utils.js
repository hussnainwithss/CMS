import { object, string } from 'yup';

export const getInitialProps = (channel) =>
    channel && Object.keys(channel).length > 0
        ? {
              arabicName: channel.arabicName,
              englishName: channel.englishName,
              isOffLine: channel.isOffLine,
              id: channel.id,
              isActive: channel.isActive,
              isDeleted: channel.isDeleted,
          }
        : { arabicName: '', englishName: '', isActive: true, isOffLine: false };

export const validationSchema = object({
    arabicName: string().required(),
    englishName: string().required(),
});
