import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { NationalityForm } from './NationalityForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';
import { selectNationalitiesFromState } from '../../../../selectors/admin/nationalities';

const Nationalities = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [nationality, setNationality] = useState({});

    const dispatch = useDispatch();

    const nationalitiesData = useSelector(selectNationalitiesFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        dispatch(actions.DeleteNationalityAttempt({ nationality, setShowDeletePopUp }));
    };

    const clickHandler = (event, row, index) => {
        setNationality(row);
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

    useEffect(() => {
        setIsLoading(true);
        dispatch(actions.getNationalitiesAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Nationalities"
                description="View and manage the list of nationalities supported by the system"
                buttonTitle="Add a new Nationality"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {nationalitiesData && (
                <DataTable
                    columns={getColumns()}
                    data={nationalitiesData}
                    dataType="Nationalities"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                header={`${isAddOrEdit} Nationality`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new nationality`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
            >
                <NationalityForm
                    isAddOrEdit={isAddOrEdit}
                    nationality={nationality}
                    afterSubmit={() => setShow(false)}
                    afterCancel={() => setShow(false)}
                />
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header='Delete Nationality'
                headerSubtitle={`Form for ${isAddOrEdit}ing a new nationality`}
                primaryButtonText="Confirm Delete"
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this nationality?</h5>
            </Modal>
        </DashboardLayout>
    );
};

export default Nationalities;
