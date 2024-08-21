import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmModal = ({ show, onHide, onConfirm }) => (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to proceed?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cancel  
            </Button>
            <Button variant="primary" onClick={() => {
                onConfirm();
                onHide();
            }}>
                Confirm
            </Button>
        </Modal.Footer>
    </Modal>
);

const ConfirmModalComponent = () => {
    const [show, setShow] = useState(false);

    const handleConfirm = () => {
        // Handle the confirmation action here
        console.log('Confirmed!');
    };

    return (
        <>
            <Button variant="danger" onClick={() => setShow(true)}>
                Delete
            </Button>

            <ConfirmModal
                show={show}
                onHide={() => setShow(false)}
                onConfirm={handleConfirm}
            />
        </>
    );
};

export default ConfirmModalComponent;

