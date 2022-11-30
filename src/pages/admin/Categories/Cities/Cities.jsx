import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { CityForm } from './CityForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { selectRegionsFromState } from '../../../../selectors/admin';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';
import { selectCitiesFromState } from '../../../../selectors/admin/cities';
import { RegionForm } from '../Regions/RegionForm';

import styles from './cities.module.css';

const Cities = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [city, setCity] = useState({});
    const [selectedRegionId, setSelectedRegionId] = useState(null);
    const [showRegionForm, setShowRegionForm] = useState(false);

    const dispatch = useDispatch();

    const citiesData = useSelector(selectCitiesFromState);
    const regionsData = useSelector(selectRegionsFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        dispatch(actions.DeleteCityAttempt({ city, setShowDeletePopUp }));
    };

    const clickHandler = (event, row, index) => {
        setCity(row);
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

    const regionFormSubmit = (regionId) => {
        setSelectedRegionId(regionId);
        setShowRegionForm(false);
    };

    const CityFormSubmitOrCancel = () => {
        setSelectedRegionId(null);
        setShow(false);
    };

    useEffect(() => {
        setIsLoading(true);
        dispatch(actions.getCitiesAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Cities"
                description="View and manage the list of cities supported by the system"
                buttonTitle="Add a new city"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {citiesData && (
                <DataTable
                    columns={getColumns()}
                    data={citiesData}
                    dataType="Cities"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                onHide={CityFormSubmitOrCancel}
                header={`${isAddOrEdit} City`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new city`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                size="lg"
            >
                {regionsData && (
                    <CityForm
                        isAddOrEdit={isAddOrEdit}
                        city={city}
                        afterSubmit={CityFormSubmitOrCancel}
                        afterCancel={CityFormSubmitOrCancel}
                        dispatch={dispatch}
                        regions={regionsData}
                        selectedRegionId={selectedRegionId}
                        showRegionForm={setShowRegionForm}
                    />
                )}
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header={`Delete City`}
                primaryButtonText="Confirm Delete"
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this city?</h5>
            </Modal>
            <Modal
                show={showRegionForm}
                setShow={setShowRegionForm}
                header={`${ACTION_TYPE.ADD} Region`}
                size="md"
                backdropClassName={styles['region-modal-backdrop']}
                dialogClassName={styles['modal-dialog-custom']}
            >
                <RegionForm
                    isAddOrEdit={ACTION_TYPE.ADD}
                    afterSubmit={regionFormSubmit}
                    afterCancel={() => setShowRegionForm(false)}
                />
            </Modal>
        </DashboardLayout>
    );
};

export default Cities;
