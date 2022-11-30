import { number, object, string } from 'yup';
import { withFormik } from 'formik';

import { actions } from '../../../../../actions/admin';
import { ACTION_TYPE } from '../constants';


export const FormikEnhancer = withFormik({
    mapPropsToValues: ({ channeType }) =>
        channeType && Object.keys(channeType).length > 0
            ? {
                  arabicName: channeType.arabicName,
                  englishName: channeType.englishName,
                  id: channeType.id,
                  isActive: channeType.isActive,
                  isDeleted: channeType.isDeleted,
                  categoryId: channeType.category.id,
              }
            : {
                  arabicName: '',
                  englishName: '',
                  isActive: true,
                  categoryId: 0,
              },
    validationSchema: object({
        arabicName: string().required(),
        englishName: string().required(),
        categoryId: number().required().notOneOf([0], 'Please Select Channel Category'),
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
                actions.addChannelTypeAttempt({
                    values: {...values, category: parseInt(values.category)},
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editChannelTypeAttempt({
                    values: {...values, category: parseInt(values.category)},
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
    },
    enableReinitialize: true,
    displayName: 'channelTypesForm',
});
