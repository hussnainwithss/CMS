import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";

const SwitchField = ({ bottomText, inline, label , ...props }) => {
  const [field, meta] = useField({...props, type: 'switch'});
  return (
    <Form.Group controlId={props.id || props.name} className={props.className}>
      <Form.Check
        {...field}
        {...props}
        className={meta.touched && meta.error ? "field-error" : ""}
        label={label}
        checked={field.value}
        inline={inline}
      />
      {meta.touched && meta.error ? (
        <Form.Text className="text-danger">{meta.error}</Form.Text>
      ) : null}
      {bottomText ? (
        <Form.Text className="mt-0 text-secondary">{bottomText}</Form.Text>
      ) : (
        ""
      )}
    </Form.Group>
  );
};

export default SwitchField;
