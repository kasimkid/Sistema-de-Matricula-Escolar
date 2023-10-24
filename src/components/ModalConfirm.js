import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirm({ show, handleClose}) {
    return (
        <>
            <ModalConfirm show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Guardar Datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Está seguro de guardar los cambios?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </ModalConfirm>
        </>
    );
}

export default ModalConfirm;