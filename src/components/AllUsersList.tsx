import { Table } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';
import { IUser } from '../hooks/useFetchUsersTable';
import { DropDownConditions } from './DropDownConditions';

export default interface IOnEditProps {
  onEdit: (user: IUser) => void;
}
export function AllUsersList({ onEdit }: IOnEditProps) {
  const { usersList, deleteUser, allColumns, isFiveRowsChecked } =
    useFetchUsersTable();

  const apiList =
    usersList &&
    usersList.map(
      (user, index) =>
        !(isFiveRowsChecked && index >= 5) && (
          <tr key={user.id}>
            {allColumns.includes('name') && <td>{user.name}</td>}
            {allColumns.includes('email') && <td>{user.email}</td>}
            {allColumns.includes('client') && <td>{user?.company?.name}</td>}
            {allColumns.includes('perfil') && <td>{user.website}</td>}
            <td>
              <BiEditAlt
                onClick={() => onEdit(user)}
                type="button"
                data-testid="edit-button"
              />
            </td>
            <td>
              <TiDelete type="button" onClick={() => deleteUser(user.id)} />
            </td>
          </tr>
        )
    );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {allColumns.includes('name') && <th>USUÁRIO</th>}
          {allColumns.includes('email') && <th>EMAIL</th>}
          {allColumns.includes('client') && <th>CLIENTE</th>}
          {allColumns.includes('perfil') && <th>PERFIL DE ACESSO</th>}
          <th>
            <DropDownConditions />
          </th>
        </tr>
      </thead>
      <tbody>{apiList}</tbody>
    </Table>
  );
}
