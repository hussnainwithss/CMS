import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { RegionForm } from './RegionForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';
import { selectRegionsFromState } from '../../../../selectors/admin/regions';

const Regions = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [region, setRegion] = useState({});

    const dispatch = useDispatch();

    const regionsData = useSelector(selectRegionsFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        dispatch(actions.DeleteRegionAttempt({ region, setShowDeletePopUp }));
    };

    const clickHandler = (event, row, index) => {
        setRegion(row);
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
        dispatch(actions.getRegionsAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Regions"
                description="View and manage the list of regions supported by the system"
                buttonTitle="Add a new Region"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {regionsData && (
                <DataTable
                    columns={getColumns()}
                    data={regionsData}
                    dataType="Regions"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                header={`${isAddOrEdit} Region`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new region`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
            >
                <RegionForm
                    isAddOrEdit={isAddOrEdit}
                    region={region}
                    afterSubmit={() => setShow(false)}
                    afterCancel={() => setShow(false)}
                />
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header='Delete Region'
                headerSubtitle={`Form for ${isAddOrEdit}ing a new region`}
                primaryButtonText="Confirm Delete"
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this region?</h5>
            </Modal>
        </DashboardLayout>
    );
};

export default Regions;
