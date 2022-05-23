import { Modal } from 'react-bootstrap';
// import { BiEditAlt } from 'react-icons/bi';
import { FormModalEdit } from './FormModalEdit';
import IModalEditProps from '../Interfaces/IModalEditProps'





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
  )
}

// export function ModalEdit({ isOpen, onClose, userInfo, setIsModalOpen, setIsUserListUpdated }) {


//   return (
//     <>
//       {/* <BiEditAlt onClick={handleShow} type='button' /> */}

//       <Modal
//         show={isOpen}
//         onHide={onClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Editar Dados do Cliente</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <FormModalEdit 
//             userInfo={ userInfo }
//             setIsModalOpen={ setIsModalOpen }
//             setIsUserListUpdated={setIsUserListUpdated}
//           />
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
