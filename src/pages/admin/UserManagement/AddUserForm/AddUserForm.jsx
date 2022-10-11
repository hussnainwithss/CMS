import React from "react";
import { useDispatch } from "react-redux";
import { Alert, Modal } from "react-bootstrap";
import { Form, Formik } from "formik";

import { actions } from "../../../../actions/admin";

import { SwitchField, TextField } from "../../../../elements/Form";
import { SelectField } from "../../../../elements/Form";
import { FilledButton } from "../../../../elements/Button";
import { validationSchema, getInitialProps } from "./form-utils";
import { USERROLES } from "../../../../constants";
import { objectMap } from "../../../../utils";
import { ACTION_TYPE } from "../constants";


export const UserForm = ({
  isAddOrEdit,
  user = {},
  afterSubmit,
  afterCancel,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    isAddOrEdit === ACTION_TYPE.ADD &&
      dispatch(
        actions.addUserAttempt({
          values,
          setSubmitting,
          resetForm,
          afterSubmit,
          setStatus,
        })
      );
    isAddOrEdit === ACTION_TYPE.EDIT &&
      dispatch(
        actions.editUserAttempt({
          values,
          setSubmitting,
          resetForm,
          afterSubmit,
          setStatus,
        })
      );
  };
  return (
    <Formik
      initialValues={getInitialProps(user)}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      onReset={afterCancel}
    >
      {(props) => (
        <Form >
          {props.status && (
            <Alert key={props.status.type} variant={props.status.type}>
              {props.status.message}
            </Alert>
          )}
          <div className="mb-3">
            <TextField
              name="email"
              type="email"
              placeholder="For example, test@adaa.gov.sa"
              label="E-mail"
              bottomText={"The email used to log in"}
            />
          </div>
          <div className="mb-3">
            <TextField
              name="name"
              type="text"
              placeholder="For example, Abdul Rehman, Abdul Rahim"
              label="User Name"
              bottomText="Username as it will appear in the reports later"
            />
          </div>
          <div className="mb-3">
            <SelectField
              name="role"
              label="User Role"
              bottomText="The user's permissions must be determined according to the following table of powers: Viewer: He has the right to review the data only without making any modifications to it. Content Manager: He can make changes to all parts of content management. Administrator: All of the above plus access to system settings and user management"
            >
              <option disabled>Select User Role</option>
              {objectMap(USERROLES, (key, value) => (
                <option value={value} key={key}>
                  {key}
                </option>
              ))}
            </SelectField>
          </div>
          <div className="mb-3">
            <SwitchField
              type="switch"
              id="isActive"
              label="Deactivate / Activate User"
              name="isActive"
              bottomText="Deactivated user will not be able to access the system"
            />
          </div>
          <Modal.Footer>
            <FilledButton variant="primary" type="submit">
              {"Save"}
            </FilledButton>
            <FilledButton variant="secondary" type="reset">
              cancel
            </FilledButton>
          </Modal.Footer>
        </Form>
      )}
    </Formik>
  );
};

// export const UserForm = FormikEnhancer(AddUserForm);
