import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

const AgeVerification = ({done, abort, widget}) => {
    return (<Modal show={widget} onHide={abort} backdrop="static"
                   keyboard={false} centered>
        <Modal.Header closeButton>
            <Modal.Title>Age verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            You must be 18 years old to enter.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={abort}>
                Cancel
            </Button>
            <Button variant="primary" onClick={done}>
                Confirm
            </Button>
        </Modal.Footer>
    </Modal>)
}
export default AgeVerification;
