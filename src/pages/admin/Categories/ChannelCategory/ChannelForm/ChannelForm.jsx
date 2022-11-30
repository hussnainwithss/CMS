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

export const ChannelForm = ({
    isAddOrEdit,
    channel = {},
    afterSubmit,
    afterCancel,
}) => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        isAddOrEdit === ACTION_TYPE.ADD &&
            dispatch(
                actions.addChannelAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editChannelAttempt({
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
            initialValues={getInitialProps(channel)}
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
                            placeholder="Website"
                            label="Channel Category name in English"
                            bottomText="Channel category name in English. This title will appear to general users in the system"
                        />
                    </div>
                    <div className="mb-3">
                        <TextField
                            name="arabicName"
                            type="text"
                            placeholder="موقع الكتروني"
                            label="Channel Category name in Arabic"
                            bottomText="Channel category name in Arabic. This title will appear to general users in the system"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <SwitchField
                            type="switch"
                            id="isOffLine"
                            label="isOnline / isOffline"
                            name="isOffLine"
                            bottomText="Is the Channel Category online (E-platform) or offline (service-center)"
                        />
                    </div>
                    <div className="mb-5">
                        <SwitchField
                            type="switch"
                            id="isActive"
                            label="Deactivate / Activate Channel Category"
                            name="isActive"
                            // bottomText="Deactivated user will not be able to access the system"
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
