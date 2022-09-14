import React from "react";
import { Container } from "react-bootstrap";

const DashboardLayout = ({ children }) => (
    <Container fluid>
        {children}
    </Container>
)

export default DashboardLayout;