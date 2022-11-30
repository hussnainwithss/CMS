import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { LanguageForm } from './LanguageForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';
import { selectLanguagesFromState } from '../../../../selectors/admin/languages';

const Languages = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [language, setLanguage] = useState({});

    const dispatch = useDispatch();

    const regionsData = useSelector(selectLanguagesFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        dispatch(actions.DeleteLanguageAttempt({ language, setShowDeletePopUp }));
    };

    const clickHandler = (event, row, index) => {
        setLanguage(row);
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
        dispatch(actions.getLanguagesAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Languages"
                description="View and manage the list of languages supported by the system"
                buttonTitle="Add a new Language"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {regionsData && (
                <DataTable
                    columns={getColumns()}
                    data={regionsData}
                    dataType="Language"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                header={`${isAddOrEdit} Language`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new language`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
            >
                <LanguageForm
                    isAddOrEdit={isAddOrEdit}
                    language={language}
                    afterSubmit={() => setShow(false)}
                    afterCancel={() => setShow(false)}
                />
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header='Delete Language'
                headerSubtitle={`Form for ${isAddOrEdit}ing a new language`}
                primaryButtonText="Confirm Delete"
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this language?</h5>
            </Modal>
        </DashboardLayout>
    );
};

export default Languages;
