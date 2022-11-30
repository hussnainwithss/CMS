import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { ChannelTypeForm } from './ChannelTypeForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { selectChannelsFromState } from '../../../../selectors/admin';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';
import { selectChannelTypesFromState } from '../../../../selectors/admin';

import styles from './channelTypes.module.css';
import { ChannelForm } from '../ChannelCategory/ChannelForm';

const ChannelTypes = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [channelType, setChannelType] = useState({});
    const [selectedChannelCategoryId, setSelectedChannelCategoryId] = useState(null);
    const [showChannelCategoryForm, setShowChannelCategoryForm] = useState(false);

    const dispatch = useDispatch();

    const channelTypesData = useSelector(selectChannelTypesFromState);
    const channelCategoriesData = useSelector(selectChannelsFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        dispatch(actions.DeleteChannelTypeAttempt({ channelType, setShowDeletePopUp }));
    };

    const clickHandler = (event, row, index) => {
        setChannelType(row);
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
        setSelectedChannelCategoryId(regionId);
        setShowChannelCategoryForm(false);
    };

    const ChannelTypeFormSubmitOrCancel = () => {
        setSelectedChannelCategoryId(null);
        setShow(false);
    };

    useEffect(() => {
        setIsLoading(true);
        dispatch(actions.getChannelTypesAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Channel Types"
                description="View and manage the list of channel types supported by the system"
                buttonTitle="Add a new channel type"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {channelTypesData && (
                <DataTable
                    columns={getColumns()}
                    data={channelTypesData}
                    dataType="Channel Types"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                onHide={ChannelTypeFormSubmitOrCancel}
                header={`${isAddOrEdit} Channel Type`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new channel type`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                size="lg"
            >
                {channelCategoriesData && (
                    <ChannelTypeForm
                        isAddOrEdit={isAddOrEdit}
                        channelType={channelType}
                        afterSubmit={ChannelTypeFormSubmitOrCancel}
                        afterCancel={ChannelTypeFormSubmitOrCancel}
                        dispatch={dispatch}
                        channelCategories={channelCategoriesData}
                        selectedChannelCategoryId={selectedChannelCategoryId}
                        shwoChannelCategoryForm={setShowChannelCategoryForm}
                    />
                )}
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header={`Delete Channel Type`}
                primaryButtonText="Confirm Delete"
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this channel type?</h5>
            </Modal>
            <Modal
                show={showChannelCategoryForm}
                setShow={setShowChannelCategoryForm}
                header={`${ACTION_TYPE.ADD} ChannelCategory`}
                size="md"
                backdropClassName={styles['region-modal-backdrop']}
                dialogClassName={styles['modal-dialog-custom']}
            >
                <ChannelForm
                    isAddOrEdit={ACTION_TYPE.ADD}
                    afterSubmit={regionFormSubmit}
                    afterCancel={() => setShowChannelCategoryForm(false)}
                />
            </Modal>
        </DashboardLayout>
    );
};

export default ChannelTypes;
