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

export const LanguageForm = ({
    isAddOrEdit,
    language = {},
    afterSubmit,
    afterCancel,
}) => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        isAddOrEdit === ACTION_TYPE.ADD &&
            dispatch(
                actions.addLanguageAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    afterSubmit,
                    setStatus,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editLanguageAttempt({
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
            initialValues={getInitialProps(language)}
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
                            placeholder="For example, English etc"
                            label="Language name in English"
                            bottomText="Langugae name in English. This title will appear to general users in the system"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <TextField
                            name="arabicName"
                            type="text"
                            placeholder="إنجليزي"
                            label="Language name in Arabic"
                            bottomText="Language name in Arabic. This title will appear to general users in the system"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <SwitchField
                            type="switch"
                            id="isTranslated"
                            label="In translation list"
                            name="isTranslated"
                            bottomText="You can activate this option when the language is not Arabic or English, in this case the translation items will be searched in a different list"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <SwitchField
                            type="switch"
                            id="isRTL"
                            label="isLTR / isRTL"
                            name="isRTL"
                            bottomText="If this option is enabled, the page orientation will be displayed from right to left"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <SwitchField
                            type="switch"
                            id="isDefault"
                            label="is Default Language"
                            name="isDefault"
                            bottomText="This language will be set as the default language when opening the evaluation page"
                        />
                    </div>
                    <hr className={commonStyles['line-grey']}/>
                    <div className="mb-3">
                        <SwitchField
                            type="switch"
                            id="isActive"
                            label="Deactivate / Activate Language"
                            name="isActive"
                            bottomText="The status of the language activation directly affects the appearance of the language in the list of floating languages ​​on the evaluation page"
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
