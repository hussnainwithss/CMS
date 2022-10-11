import React from 'react';
import { Button, Card } from 'react-bootstrap';

import backgroundImg from '../../assets/img/corner-4.png';

import './titleCard.css';

const TitleCard = ({
    title,
    description,
    buttonId,
    buttonTitle,
    buttonOnClick = () => {
        console.log('clicked');
    },
}) => {
    return (
        <Card className="mb-3">
            <Card.Img src={backgroundImg} alt="background" />
            <Card.ImgOverlay>
                <Card.Body>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Button
                        variant="link"
                        id={buttonId}
                        onClick={(e) => buttonOnClick(e)}
                        className="p-0"
                        as="a"
                    >
                        {buttonTitle}
                    </Button>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
};

export default TitleCard;
