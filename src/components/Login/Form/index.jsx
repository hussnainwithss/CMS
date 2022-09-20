import React from "react";
import { Row } from "react-bootstrap";
import { Form } from "formik";

import { FormikEnhancer } from "./form-utils";

import { TextField } from "../../../elements/Form";
import { FilledButton } from "../../../elements/Button";

const LoginFormMarkup = (props) => {
  const { isValid, isSubmitting } = props;
  return (
    <Form>
      <div className="mb-3">
        <Row className="mb-3 dir-rtl">
          <TextField
            name="email"
            type="email"
            placeholder="البريد الالكتروني الخاص بكم في اداء"
            className='dir-rtl'
          />
        </Row>
        <Row>
          <TextField
            name="password"
            type="password"
            placeholder="البريد الالكتروني الخاص بكم في اداء"
          />
        </Row>
        <div>
          <FilledButton
            type="submit"
            variant="success"
            className="w-100 d-block mt-3"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "تسجيل الدخول..." : "تسجيل الدخول"}
          </FilledButton>
        </div>
      </div>
    </Form>
  );
};

export const LoginForm = FormikEnhancer(LoginFormMarkup);
