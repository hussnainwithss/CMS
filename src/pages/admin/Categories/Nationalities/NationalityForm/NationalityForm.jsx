import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Modal } from 'react-bootstrap';
import { Form, Formik } from 'formik';

import { actions } from '../../../../../actions/admin';

import { SwitchField, TextField } from '../../../../../elements/Form';
import { FilledButton } from '../../../../../elements/Button';
import { validationSchema, getInitialProps } from './form-utils';
import { ACTION_TYPE } from '../constants';

import commonStyles from '../../../../../styles/common.module.css';

export const NationalityForm = ({
    isAddOrEdit,
    nationality = {},
    afterSubmit,
    afterCancel,
}) => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        isAddOrEdit === ACTION_TYPE.ADD &&
            dispatch(
                actions.addNationalityAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editNationalityAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
    };

    return (
        <Formik
            initialValues={getInitialProps(nationality)}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            onReset={afterCancel}
        >
            {(props) => (
                <Form>
                    {props.status && (
                        <Alert
                            key={props.status.type}
                            variant={props.status.type}
                        >
                            {props.status.message}
                        </Alert>
                    )}
                    <div className="mb-3">
                        <TextField
                            name="englishName"
                            type="text"
                            placeholder="For example, Saudi Arabia, Jordan etc"
                            label="Nationality name in English"
                            bottomText="Nationality name in English. This title will appear to general users in the system"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <TextField
                            name="arabicName"
                            type="text"
                            placeholder="المملكة العربية السعودية, الأردن"
                            label="Nationality name in Arabic"
                            bottomText="Nationality name in Arabic. This title will appear to general users in the system"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <SwitchField
                            type="switch"
                            id="isActive"
                            label="Deactivate / Activate Nationality"
                            name="isActive"
                            bottomText="The state of activation of the nationality directly affects the appearance of list of nationalities GSB services"
                        />
                    </div>
                    <Modal.Footer>
                        <FilledButton variant="primary" type="submit">
                            Save
                        </FilledButton>
                        <FilledButton variant="secondary" type="reset">
                            Cancel
                        </FilledButton>
                    </Modal.Footer>
                </Form>
            )}
        </Formik>
    );
};

// export const UserForm = FormikEnhancer(AddUserForm);
