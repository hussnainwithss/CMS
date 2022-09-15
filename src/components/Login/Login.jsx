import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Card, Col, Row } from "react-bootstrap";
import { BaseLayout } from "../../layouts";
import { TextField } from "../../elements/Form";
import { FilledButton } from "../../elements/Button";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { login, user, isAuthenticated, token } = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (values) => {
    console.log(values);
    login(values);
  };

  return (
    <BaseLayout>
      <Row className="min-vh-100 flex-center g-0">
        <Col
          lg={8}
          xxl={5}
          className="py-3 position-relative mb-0 mt-0 mr-0 ml-0"
        >
          <Card className="overflow-hidden z-index-1">
            <Card.Body className="p-0">
              <Row className="g-0 h-100">
                <Col
                  md={5}
                  className="text-center"
                  style={{ backgroundColor: "#05b67e" }}
                >
                  <div className="position-relative p-4 pt-md-5 pb-md-7 light"></div>
                </Col>
                <Col md={7} className="flex flex-center">
                  <div className="p-4 p-md-5 flex-grow-1">
                    <Row className="flex-between-center">
                      <Col auto="true">
                        <h3>تسجيل الدخول</h3>
                      </Col>
                    </Row>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      <Form>
                        <div className="mb-3">
                          <Row className="mb-3">
                            <TextField
                              name="email"
                              type="email"
                              placeholder="البريد الالكتروني الخاص بكم في اداء"
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
                            >
                              تسجيل الدخول
                            </FilledButton>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </BaseLayout>
  );
};

export default Login;
