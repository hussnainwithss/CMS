import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export const ServicesGrid = () => {
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

