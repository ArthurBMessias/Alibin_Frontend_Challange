import { Modal } from 'react-bootstrap';
// import { BiEditAlt } from 'react-icons/bi';
import { FormModalEdit } from './FormModalEdit';

export function ModalEdit({ isOpen, onClose, userInfo }) {


  return (
    <>
      {/* <BiEditAlt onClick={handleShow} type='button' /> */}

      <Modal
        show={isOpen}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Dados do Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormModalEdit userInfo={ userInfo } />
        </Modal.Body>
      </Modal>
    </>
  );
}
