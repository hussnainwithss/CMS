import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { EntityTypeForm } from './EntityTypeForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { selectEntityTypesFromState } from '../../../../selectors/admin';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';
import { useLayoutEffect } from 'react';

const EntityType = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [entityType, setEntityType] = useState({});
    const [isDeleting, setIsDeleting] = useState(false);

    const dispatch = useDispatch();

    const entityTypesData = useSelector(selectEntityTypesFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        setIsDeleting(true);
        dispatch(actions.DeleteEntityTypeAttempt({ entityType, setShowDeletePopUp, setIsDeleting }));
    };

    const clickHandler = (event, row, index) => {
        setEntityType(row);
        if (event.target.id === 'add') {
            handleOpen(ACTION_TYPE.ADD);
        }
        if (event.target.id === 'edit') {
            handleOpen(ACTION_TYPE.EDIT);
        }

        if (event.target.id === 'trash') {
            showDeletePopup();
        }
    };

    useLayoutEffect(() => {
        setIsLoading(true);
        dispatch(actions.getEntityTypesAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Entity Types"
                description="View and manage the list of entity types supported by the system"
                buttonTitle="Add a new entity type"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {entityTypesData && (
                <DataTable
                    columns={getColumns()}
                    data={entityTypesData}
                    dataType="Entity Types"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                header={`${isAddOrEdit} Entity Type`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new entity type`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
            >
                <EntityTypeForm
                    isAddOrEdit={isAddOrEdit}
                    entityType={entityType}
                    afterSubmit={() => setShow(false)}
                    afterCancel={() => setShow(false)}
                />
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header={`Delete Entity type`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new entity type`}
                primaryButtonText={isDeleting ? "Deleting..." :  "Confirm Delete"}
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this entity type?</h5>
            </Modal>
        </DashboardLayout>
    );
};

export default EntityType;
