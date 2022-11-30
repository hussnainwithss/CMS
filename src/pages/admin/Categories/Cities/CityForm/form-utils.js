import { number, object, string } from 'yup';
import { withFormik } from 'formik';

import { actions } from '../../../../../actions/admin';
import { ACTION_TYPE } from '../constants';


export const FormikEnhancer = withFormik({
    mapPropsToValues: ({ city }) =>
        city && Object.keys(city).length > 0
            ? {
                  arabicName: city.arabicName,
                  englishName: city.englishName,
                  id: city.id,
                  isActive: city.isActive,
                  isDeleted: city.isDeleted,
                  regionId: city.region.id,
              }
            : {
                  arabicName: '',
                  englishName: '',
                  isActive: true,
                  regionId: 0,
              },
    validationSchema: object({
        arabicName: string().required(),
        englishName: string().required(),
        regionId: number().required().notOneOf([0], 'Please Select Region'),
    }),
    handleSubmit: (
        values,
        {
            setSubmitting,
            resetForm,
            setStatus,
            props: { dispatch, isAddOrEdit, afterSubmit },
        },
    ) => {
        isAddOrEdit === ACTION_TYPE.ADD &&
            dispatch(
                actions.addCityAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editCityAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
    },
    enableReinitialize: true,
    displayName: 'CityForm',
});
