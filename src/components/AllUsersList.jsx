import { Dropdown, Table } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiEditAlt } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import { DropDownConditions } from './DropDownConditions';

export function AllUsersList({
  onEdit,
  usersList,
  deleteUser,
  isUserListUpdated,
  allColumns,
  setAllColumns,
}) {
  const storagedUsers = JSON.parse(localStorage.getItem('users')) || [];

  function deleteEditedUser(id) {
    storagedUsers.filter((user) => user.id !== id);
  }

  const apiList =
    usersList &&
    usersList.map((user) => (
      <tr key={user.id}>
        {allColumns.includes('name') && <td>{user.name}</td>}
        {allColumns.includes('email') && <td>{user.email}</td>}
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
  const userColumn =
    usersList &&
    usersList.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>
          <BiEditAlt onClick={() => onEdit(user)} type="button" />
        </td>
        <td>
          <TiDelete type="button" onClick={() => deleteUser(user.id)} />
        </td>
      </tr>
    ));

  const updatedList = storagedUsers.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.company.name}</td>
      <td>{user.website}</td>
      <td>
        <BiEditAlt onClick={() => onEdit(user)} type="button" />
      </td>
      <td>
        <TiDelete type="button" onClick={() => deleteEditedUser(user.id)} />
      </td>
    </tr>
  ));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {allColumns.includes('name') && <th>USUÁRIO</th>}
          {allColumns.includes('email') && <th>EMAIL</th>}
          <th>CLIENTE</th>
          <th>PERFIL DE ACESSO</th>
          <th>
            <DropDownConditions setAllColumns={setAllColumns} allColumns={allColumns} />
          </th>
        </tr>
      </thead>
      <tbody>{!isUserListUpdated ? apiList : updatedList}</tbody>
    </Table>
  );
}

export default AllUsersList;
