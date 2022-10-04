import React from "react";

import { Card, Col, Row } from "react-bootstrap";

import { LoginForm } from "./Form";

import { useAuth } from "../../hooks/useAuth";

import { BaseLayout } from "../../layouts";

const Login = () => {
  const { login } = useAuth();

  return (
    <BaseLayout>
      <Row className="min-vh-100 flex-center g-0">
        <Col
          lg={8}
          xxl={5}
          className="py-3 position-relative mb-auto mt-auto ms-auto me-auto"
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
                        <h3>Login</h3>
                      </Col>
                    </Row>
                    <LoginForm login={login} />
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
