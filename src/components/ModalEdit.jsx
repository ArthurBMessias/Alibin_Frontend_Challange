import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BiEditAlt } from 'react-icons/bi';

export function ModalEdit() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button onClick={handleShow}>
        <BiEditAlt />
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <input
           type="text"
          placeholder="Enter a title" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }