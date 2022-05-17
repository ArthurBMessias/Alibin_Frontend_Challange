import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';
import { FormModalEdit } from './FormModalEdit';

export function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BiEditAlt onClick={handleShow} type='button' />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Dados do Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormModalEdit />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
