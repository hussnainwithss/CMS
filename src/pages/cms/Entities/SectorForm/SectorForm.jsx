import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form as FormBS, Modal as ModalBS, Card } from 'react-bootstrap';
import { Form, Formik } from 'formik';

import { validationSchema, getInitialProps } from './form-utils';

import { Modal } from '../../../../components/ModalContainer';
import { SwitchField, TextField } from '../../../../elements/Form';
import { FilledButton } from '../../../../elements/Button';

import { DashboardLayout } from '../../../../layouts';
import { TitleCard } from '../../../../components/TitleCard';

import { actions } from '../../../../actions/sectors';

import commonStyles from '../../../../styles/common.module.css';
import { ACTION_TYPE } from './constants';
import { ROUTES } from '../../../../routes/constants';
import { useEffect } from 'react';
import {
    selectSectorFromState,
    selectSectorsFromState,
} from '../../../../selectors/sectors';

const SectorForm = () => {
    const [showCancelationPopUp, setShowCancelationPopUp] = useState(false);
    const [showDeletePopUp, setshowDeletePopUp] = useState(false);
    const { pathname } = useLocation();
    const isAddOrEdit = pathname.includes('add')
        ? ACTION_TYPE.ADD
        : ACTION_TYPE.EDIT;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sectorsData = useSelector(selectSectorsFromState);

    const getSector = () => {
        const sectorId = parseInt(pathname.split('/').at('-1'));
        console.log({ sectorId });
        return selectSectorFromState(sectorsData, sectorId)[0];
    };

    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        isAddOrEdit === ACTION_TYPE.ADD &&
            dispatch(
                actions.addSectorAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    setStatus,
                    navigate,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editSectorAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    setStatus,
                    navigate,
                }),
            );
    };

    return (
        <DashboardLayout>
            <TitleCard
                title={`${isAddOrEdit} Sector Form`}
                description={`Form for ${isAddOrEdit}ing sectors`}
            />
            <Card>
                <Card.Body>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={getInitialProps(getSector())}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {(props) => (
                            <>
                                <Form>
                                    <div className="mb-1">
                                        <TextField
                                            name="englishName"
                                            type="text"
                                            label="English Name"
                                            placeholder="Education, Healthcare"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            name="arabicName"
                                            type="text"
                                            placeholder="تعليم, رعاية صحية"
                                            label="Arabic Name"
                                        />
                                    </div>
                                    <hr className={commonStyles['line-grey']} />
                                    <div className="mb-3">
                                        <TextField
                                            name="imageURL"
                                            type="text"
                                            label="Image URL"
                                        />
                                    </div>
                                    <hr className={commonStyles['line-grey']} />
                                    <div className="mb-5">
                                        <SwitchField
                                            type="switch"
                                            id="isActive"
                                            label="Deactivate / Activate Service"
                                            name="isActive"
                                        />
                                    </div>
                                    <ModalBS.Footer>
                                        {isAddOrEdit === ACTION_TYPE.EDIT && (
                                            <FilledButton
                                                variant="danger"
                                                className="me-1"
                                                onClick={() =>
                                                    setshowDeletePopUp(true)
                                                }
                                            >
                                                Delete Sector
                                            </FilledButton>
                                        )}
                                        <FilledButton
                                            variant="primary"
                                            type="submit"
                                            className="me-1"
                                        >
                                            {'Save'}
                                        </FilledButton>
                                        <FilledButton
                                            variant="secondary"
                                            onClick={() => {
                                                props.dirty
                                                    ? setShowCancelationPopUp(
                                                          true,
                                                      )
                                                    : navigate(ROUTES.SECTORS);
                                            }}
                                        >
                                            cancel
                                        </FilledButton>
                                    </ModalBS.Footer>
                                </Form>
                                <Modal
                                    show={showCancelationPopUp}
                                    setShow={setShowCancelationPopUp}
                                    header={`Leave Changes unsaved`}
                                    primaryButtonText="yes Leave Page"
                                    secondaryButtonText="no"
                                    onCancel={() =>
                                        setShowCancelationPopUp(false)
                                    }
                                    onSave={() => {
                                        props.resetForm();
                                        navigate(ROUTES.SECTORS);
                                    }}
                                    size="md"
                                    saveButtonType="danger"
                                >
                                    <h5>
                                        You have modified the page and you will
                                        lose those changes, Are you sure you
                                        want to leave this page?
                                    </h5>
                                </Modal>
                                <Modal
                                    show={showDeletePopUp}
                                    setShow={setshowDeletePopUp}
                                    header={`Delete Sector`}
                                    primaryButtonText="Confirm Delete"
                                    secondaryButtonText="Cancel"
                                    onCancel={() => setshowDeletePopUp(false)}
                                    onSave={() => {
                                        dispatch(
                                            actions.DeleteSectorAttempt({
                                                sector: getSector(),
                                                setshowDeletePopUp,
                                                navigate
                                            }),
                                        );
                                    }}
                                    size="md"
                                    saveButtonType="danger"
                                >
                                    <h5>
                                        Are you sure you want to delete this
                                        sector?
                                    </h5>
                                </Modal>
                            </>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
};

export default SectorForm;
