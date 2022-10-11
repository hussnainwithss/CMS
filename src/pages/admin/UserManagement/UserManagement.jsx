import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserForm } from "./AddUserForm";
import { ACTION_TYPE } from "./constants";

import { actions } from "../../../actions/admin";

import TitleCard from "../../../components/TitleCard/TitleCard";
import { DashboardLayout } from "../../../layouts";
import { selectUsersFromState } from "../../../selectors/admin/users";
import { getColumns, TableActions } from "./TableData";
import { DataTable } from "../../../components/DataTable";
import { Modal } from "../../../components/ModalContainer";

const UserManagement = () => {
  const [show, setShow] = useState(false);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [isAddOrEdit, setIsAddOrEdit] = useState(ACTION_TYPE.ADD);

  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const userData = useSelector(selectUsersFromState);
  
  const handleOpen = (isAddOrEdit) => {
    setIsAddOrEdit(isAddOrEdit);
    setShow(true);
  };

  const showDeletePopup = () => {
    setShowDeletePopUp(true);
  };

  useEffect(() => {
    dispatch(actions.getUsersAttempt());
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(actions.DeleteUserAttempt({user, setShowDeletePopUp}));
  };


  const clickHandler = (event, row, index) => {
    setUser(row);
    if (event.target.id === "add") {
      handleOpen(ACTION_TYPE.ADD);
    }
    if (event.target.id === "edit") {
      handleOpen(ACTION_TYPE.EDIT);
    }

    if (event.target.id === "trash") {
      showDeletePopup();
    }
  };

  

  return (
    <DashboardLayout>
      <TitleCard
        title="User Management"
        description="View and manage the list of users in the system"
        buttonTitle="Add a new user"
        buttonId="add"
        buttonOnClick={clickHandler}
      />
      {userData.length > 0 && (
        <DataTable
          columns={getColumns()}
          data={userData}
          dataType="Users"
          actions={TableActions}
          handler={clickHandler}
        />
      )}
      <Modal
        show={show}
        setShow={setShow}
        header={`${isAddOrEdit} User`}
        headerSubtitle={`Form for ${isAddOrEdit}ing a new user`}
        primaryButtonText="Save"
        secondaryButtonText="Cancel"
      >
        <UserForm
          isAddOrEdit={isAddOrEdit}
          user={user}
          afterSubmit={() => setShow(false)}
          afterCancel={() => setShow(false)}
        />
      </Modal>
      <Modal
        show={showDeletePopUp}
        setShow={setShowDeletePopUp}
        header={`Delete User`}
        headerSubtitle={`Form for ${isAddOrEdit}ing a new user`}
        primaryButtonText="Confirm Delete"
        secondaryButtonText="Cancel"
        onCancel={() => setShowDeletePopUp(false)}
        onSave={handleDelete}
        size='md'
      >
        <h5>Are you sure you want to delete this user?</h5>
      </Modal>
    </DashboardLayout>
  );
};

export default UserManagement;
