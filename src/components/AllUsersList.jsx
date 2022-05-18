import { Table } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiEditAlt } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';
import { useState } from 'react';
import { useEffect } from 'react';

export function AllUsersList({
  onEdit,
  usersList,
  deleteUser,
  isUserListUpdated,
  updatedUsersList,
}) {
  const [test, setTest] = useState([])

const { newList } = useFetchUsersTable();

// useEffect(() => {
//   const { newList } = useFetchUsersTable();
//   setTest(newList)
// }, [isUserListUpdated]);

  const apiList =
    usersList &&
    usersList.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.company.name}</td>
        <td>{user.website}</td>
        <td>
          <BiEditAlt onClick={() => onEdit(user)} type="button" />
        </td>
        <td>
          <TiDelete type="button" onClick={() => deleteUser(user.id)} />
        </td>
      </tr>
    ));

  // const mockList = [
  //   {
  //     id: 1,
  //     name: 'Cleyson',
  //     email: 'Sincere@april.biz',
  //     website: 'xablau',
  //     company: { name: 'Arthur' },
  //   },
  //   {
  //     id: 2,
  //     name: 'Darth Vader',
  //     email: 'fodassi@april.biz',
  //     website: 'sim',
  //     company: { name: 'blabla' },
  //   },
  // ];

  const updatedList = test.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.company.name}</td>
      <td>{user.website}</td>
      <td>
        <BiEditAlt onClick={() => onEdit(user)} type="button" />
      </td>
      <td>
        <TiDelete type="button" onClick={() => deleteUser(user.id)} />
      </td>
    </tr>
  ));

  return (
    <Table striped bordered hover>
      {console.log(updatedList)}
      <thead>
        <tr>
          <th>USUÁRIO</th>
          <th>EMAIL</th>
          <th>CLIENTE</th>
          <th>PERFIL DE ACESSO</th>
          <th>
            <BiDotsVerticalRounded />
          </th>
        </tr>
      </thead>
      <tbody>{ !isUserListUpdated ? apiList : updatedList }</tbody>
    </Table>
  );
}

export default AllUsersList;
