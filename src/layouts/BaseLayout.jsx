import React from "react";
import { Container } from "react-bootstrap";

const BaseLayout = ({children}) => (
    <Container fluid>
        {children}
    </Container>
)

export default BaseLayout;