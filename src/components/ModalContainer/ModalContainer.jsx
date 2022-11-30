import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalContainer = ({
    show,
    setShow,
    header,
    children,
    onSave,
    onCancel,
    primaryButtonText,
    secondaryButtonText,
    onHide,
    backdropClassName,
    dialogClassName,
    size = 'lg',
    saveButtonType='success'
}) => {
    const handleClose = () => setShow(false);

    return (
        <Modal
            show={show}
            onHide={onHide || handleClose}
            centered
            size={size}
            backdropClassName={backdropClassName}
            className={dialogClassName}
            
        >
            <Modal.Header className={`bg-light py-3 ps-4 pe-6 `} closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">{children}</Modal.Body>
            {(onSave || onCancel) && (
                <Modal.Footer>
                    {onSave && (
                        <Button
                            variant={saveButtonType}
                            onClick={onSave}
                            type="submit"
                        >
                            {primaryButtonText}
                        </Button>
                    )}
                    {onCancel && (
                        <Button variant="secondary" onClick={onCancel}>
                            {secondaryButtonText}
                        </Button>
                    )}
                </Modal.Footer>
            )}
        </Modal>
    );
};

export default ModalContainer;
