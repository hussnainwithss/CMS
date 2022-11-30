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

export const RegionForm = ({
    isAddOrEdit,
    region = {},
    afterSubmit,
    afterCancel,
}) => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        isAddOrEdit === ACTION_TYPE.ADD &&
            dispatch(
                actions.addRegionAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editRegionAttempt({
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
            initialValues={getInitialProps(region)}
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
                            placeholder="For example, Riyadh, Jizan etc."
                            label="Region name in English"
                            bottomText="Region name in English. This title will appear to general users in the system"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <TextField
                            name="arabicName"
                            type="text"
                            placeholder="منطقة الرياض, منطقة جازان"
                            label="Region name in Arabic"
                            bottomText="Region name in Arabic. This title will appear to general users in the system"
                        />
                    </div>
                    <div className="mb-3">
                        <SwitchField
                            type="switch"
                            id="isActive"
                            label="Deactivate / Activate Region"
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
