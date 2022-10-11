import React from 'react';
import { Container } from 'react-bootstrap';

import './container.css';

const BaseLayout = ({ children }) => (
    <Container fluid id="container">
        {children}
    </Container>
);

export default BaseLayout;
