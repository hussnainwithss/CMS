import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPE } from './constants';

import { actions } from '../../../../actions/admin';

import { QuestionCategoryForm } from './QuestionCategoryForm';

import TitleCard from '../../../../components/TitleCard/TitleCard';
import { Loader } from '../../../../components/Loader';
import { DashboardLayout } from '../../../../layouts';
import { getColumns, TableActions } from './TableData';
import { DataTable } from '../../../../components/DataTable';
import { Modal } from '../../../../components/ModalContainer';
import { useLayoutEffect } from 'react';
import { selectQuestionCategoryFromState } from '../../../../selectors/admin/questionCategory';

const QuestionCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);
    const [questionCategory, setQuestionCategory] = useState({});
    const [isDeleting, setIsDeleting] = useState(false);

    const dispatch = useDispatch();

    const questionCategoriesData = useSelector(selectQuestionCategoryFromState);

    const handleOpen = (isAddOrEdit) => {
        setIsAddOrEdit(isAddOrEdit);
        setShow(true);
    };

    const showDeletePopup = () => {
        setShowDeletePopUp(true);
    };

    const handleDelete = () => {
        setIsDeleting(true);
        dispatch(actions.DeleteQuestionCategoryAttempt({ questionCategory, setShowDeletePopUp, setIsDeleting }));
    };

    const clickHandler = (event, row, index) => {
        setQuestionCategory(row);
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
        dispatch(actions.getQuestionCategoriesAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Question Categories"
                description="View and manage the list of question categories supported by the system"
                buttonTitle="Add a new question category"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            {questionCategoriesData && (
                <DataTable
                    columns={getColumns()}
                    data={questionCategoriesData}
                    dataType="Question Categories"
                    actions={TableActions}
                    handler={clickHandler}
                    isPaginated
                />
            )}
            <Modal
                show={show}
                setShow={setShow}
                header={`${isAddOrEdit} Question Category`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new question category`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
            >
                <QuestionCategoryForm
                    isAddOrEdit={isAddOrEdit}
                    questionCategory={questionCategory}
                    afterSubmit={() => setShow(false)}
                    afterCancel={() => setShow(false)}
                />
            </Modal>
            <Modal
                show={showDeletePopUp}
                setShow={setShowDeletePopUp}
                header={`Delete Question Category`}
                headerSubtitle={`Form for ${isAddOrEdit}ing a new question category`}
                primaryButtonText={isDeleting ? "Deleting..." :  "Confirm Delete"}
                secondaryButtonText="Cancel"
                onCancel={() => setShowDeletePopUp(false)}
                onSave={handleDelete}
                size="md"
            >
                <h5>Are you sure you want to delete this question category?</h5>
            </Modal>
        </DashboardLayout>
    );
};

export default QuestionCategory;
