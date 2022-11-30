import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { ChannelForm } from './ChannelForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { selectChannelsFromState } from '../../../../selectors/admin';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';

const Channels = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [channel, setChannel] = useState({});

    const dispatch = useDispatch();

    const channelsData = useSelector(selectChannelsFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        dispatch(actions.DeleteChannelAttempt({ channel, setShowDeletePopUp }));
    };

    const clickHandler = (event, row, index) => {
        setChannel(row);
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
        dispatch(actions.getChannelsAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Channel Categories"
                description="View and manage the list of channels categories supported by the system"
                buttonTitle="Add a new channel category"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {channelsData && (
                <DataTable
                    columns={getColumns()}
                    data={channelsData}
                    dataType="Channel Categories"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                header={`${isAddOrEdit} Channel`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new channel`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
            >
                <ChannelForm
                    isAddOrEdit={isAddOrEdit}
                    channel={channel}
                    afterSubmit={() => setShow(false)}
                    afterCancel={() => setShow(false)}
                />
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header={`Delete Channel`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new channel`}
                primaryButtonText="Confirm Delete"
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this channel?</h5>
            </Modal>
        </DashboardLayout>
    );
};

export default Channels;
