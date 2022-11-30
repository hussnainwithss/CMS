import React from 'react';
import { Button, Card } from 'react-bootstrap';

import backgroundImg from '../../assets/img/corner-4.png';

import './titleCard.css';

const TitleCard = ({
    title,
    description,
    buttonId,
    buttonTitle,
    buttonOnClick,
    isButton,
    children,
}) => {
    return (
        <Card className="mb-3">
            <Card.Img src={backgroundImg} alt="background" />
            <Card.ImgOverlay>
                <Card.Body>
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                    {children && children}
                    {buttonTitle && <Button
                        variant={isButton ? 'primary' : 'link'}
                        id={buttonId}
                        onClick={(e) => buttonOnClick(e)}
                        // as="a"
                        className='ps-0'
                    >
                    {buttonTitle}
                    </Button>}
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
};

export default TitleCard;
