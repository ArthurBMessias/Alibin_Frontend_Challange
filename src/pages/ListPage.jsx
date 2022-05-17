import { useState } from 'react';
import AllUsersList from '../components/AllUsersList';
import { ModalEdit } from '../components/ModalEdit';

export function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(undefined);

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <ModalEdit 
        isOpen={isModalOpen} 
        onClose={handleClose}
        userInfo={userInfo} 
      />
      <AllUsersList
        onEdit={ (user) => {
          setIsModalOpen(true);
          setUserInfo(user);
        }}
       />
    </>
  );
}
