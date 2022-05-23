import { useState } from 'react';
import AllUsersList from '../components/AllUsersList';
import { ModalEdit } from '../components/ModalEdit';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';

export function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(undefined);
  const {
    usersList,
    setUsersList,
    deleteUser,
    isUserListUpdated,
    setIsUserListUpdated,
    updatedUsersList,
    allColumns,
    setAllColumns,
    standard,
    setStandard,
    filterColumn,
  } = useFetchUsersTable();

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <ModalEdit
        isOpen={isModalOpen}
        onClose={handleClose}
        userInfo={userInfo}
        setIsModalOpen={setIsModalOpen}
        setIsUserListUpdated={setIsUserListUpdated}
      />
      <AllUsersList
        onEdit={(user) => {
          setIsModalOpen(true);
          setUserInfo(user);
        }}
        usersList={usersList}
        setUsersList={setUsersList}
        deleteUser={deleteUser}
        isUserListUpdated={isUserListUpdated}
        updatedUsersList={updatedUsersList}
        allColumns={allColumns}
        setAllColumns={setAllColumns}
        standard={standard}
        setStandard={setStandard}
        filterColumn={filterColumn}
      />
    </>
  );
}
