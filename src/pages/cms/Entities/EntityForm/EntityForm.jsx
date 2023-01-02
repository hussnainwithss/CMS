import React, { useState, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form as FormBS, Modal as ModalBS, Card } from 'react-bootstrap';
import { Form, Formik } from 'formik';

import { validationSchema, getInitialProps } from './form-utils';

import { Modal } from '../../../../components/ModalContainer';
import { SwitchField, TextField, SelectField } from '../../../../elements/Form';
import { FilledButton } from '../../../../elements/Button';

import { DashboardLayout } from '../../../../layouts';
import { TitleCard } from '../../../../components/TitleCard';

import { actions } from '../../../../actions/entities';
import { actions as sectorActions } from '../../../../actions/sectors';
import { actions as adminActions } from '../../../../actions/admin';

import commonStyles from '../../../../styles/common.module.css';
import { ACTION_TYPE } from './constants';
import { ROUTES } from '../../../../routes/constants';
import {
    selectEntityFromState,
    selectEntitiesFromState,
} from '../../../../selectors/entities';
import { selectSectorsFromState } from '../../../../selectors/sectors';
import { selectEntityTypesFromState } from '../../../../selectors/admin';

const EntityForm = () => {
    const { pathname } = useLocation();
    const isAddOrEdit = pathname.includes('add')
        ? ACTION_TYPE.ADD
        : ACTION_TYPE.EDIT;
    const [showCancelationPopUp, setShowCancelationPopUp] = useState(false);
    const [showDeletePopUp, setshowDeletePopUp] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const entitiesData = useSelector(selectEntitiesFromState);
    const sectorsData = useSelector(selectSectorsFromState);
    const entityTypesData = useSelector(selectEntityTypesFromState);

    const getEntity = () => {
        const entityId = parseInt(pathname.split('/').at('-1'));
        return selectEntityFromState(entitiesData, entityId)[0];
    };

    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        isAddOrEdit === ACTION_TYPE.ADD &&
            dispatch(
                actions.addEntityAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    setStatus,
                    navigate,
                }),
            );
        isAddOrEdit === ACTION_TYPE.EDIT &&
            dispatch(
                actions.editEntityAttempt({
                    values,
                    setSubmitting,
                    resetForm,
                    setStatus,
                    navigate,
                }),
            );
    };

    useLayoutEffect(() => {
        dispatch(sectorActions.getSectorsAttempt({}));
    }, [dispatch]);

    useLayoutEffect(() => {
        dispatch(adminActions.getEntityTypesAttempt({}));
    }, [dispatch]);

    return (
        <DashboardLayout>
            <TitleCard
                title={`${isAddOrEdit} Entity Form`}
                description={`Form for ${isAddOrEdit}ing entities`}
            />
            <Card>
                <Card.Body>
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={getInitialProps(getEntity())}
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
                                            name="Logo"
                                            type="text"
                                            label="Image URL"
                                        />
                                    </div>
                                    <hr className={commonStyles['line-grey']} />
                                    <div className="mb-3">
                                        <TextField
                                            name="IsoCode"
                                            type="text"
                                            label="ISO Code"
                                        />
                                    </div>
                                    <hr className={commonStyles['line-grey']} />
                                    <div className="mb-3">
                                        <SelectField
                                            name="sectorId"
                                            label="Sector"
                                        >
                                            <option value={0} disabled>
                                                Select Sector
                                            </option>
                                            {sectorsData.map(
                                                (sector) =>
                                                    sector.isActive && (
                                                        <option
                                                            value={parseInt(
                                                                sector.id,
                                                            )}
                                                            key={sector.id}
                                                        >
                                                            {sector.englishName}
                                                        </option>
                                                    ),
                                            )}
                                        </SelectField>
                                    </div>
                                    <hr className={commonStyles['line-grey']} />
                                    <div className="mb-3">
                                        <SelectField
                                            name="entityTypeId"
                                            label="Entity Type"
                                        >
                                            <option value={0} disabled>
                                                Select Entity Type
                                            </option>
                                            {entityTypesData.map(
                                                (sector) =>
                                                    sector.isActive && (
                                                        <option
                                                            value={parseInt(
                                                                sector.id,
                                                            )}
                                                            key={sector.id}
                                                        >
                                                            {sector.englishName}
                                                        </option>
                                                    ),
                                            )}
                                        </SelectField>
                                    </div>
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
                                                Delete Entity
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
                                                    : navigate(ROUTES.ENTITIES);
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
                                        navigate(ROUTES.ENTITIES);
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
                                    header={`Delete Entity`}
                                    primaryButtonText="Confirm Delete"
                                    secondaryButtonText="Cancel"
                                    onCancel={() => setshowDeletePopUp(false)}
                                    onSave={() => {
                                        dispatch(
                                            actions.DeleteEntityAttempt({
                                                entity: getEntity(),
                                                hideDeletePopUp: () =>
                                                    setshowDeletePopUp(false),
                                                navigate,
                                            }),
                                        );
                                    }}
                                    size="md"
                                    saveButtonType="danger"
                                >
                                    <h5>
                                        Are you sure you want to delete this
                                        entity?
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

export default EntityForm;
