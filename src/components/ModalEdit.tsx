import { Modal } from 'react-bootstrap';
import { FormModalEdit } from './FormModalEdit';
import IModalEditProps from '../Interfaces/IModalEditProps';

export function ModalEdit({
  isOpen,
  onClose,
  userInfo,
  setIsModalOpen,
}: IModalEditProps) {
  return (
    <>
      <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Dados do Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormModalEdit userInfo={userInfo} setIsModalOpen={setIsModalOpen} />
        </Modal.Body>
      </Modal>
    </>
  );
}
