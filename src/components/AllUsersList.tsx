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
  const { usersList, deleteUser, allCollumns, isFiveRowsChecked } =
    useFetchUsersTable();

  const apiList =
    usersList &&
    usersList.map(
      (user, index) =>
        !(isFiveRowsChecked && index >= 5) && (
          <tr key={user.id}>
            {allCollumns.includes('name') && <td>{user.name}</td>}
            {allCollumns.includes('email') && <td>{user.email}</td>}
            {allCollumns.includes('client') && <td>{user?.company?.name}</td>}
            {allCollumns.includes('perfil') && <td>{user.website}</td>}
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
          {allCollumns.includes('name') && <th>USUÁRIO</th>}
          {allCollumns.includes('email') && <th>EMAIL</th>}
          {allCollumns.includes('client') && <th>CLIENTE</th>}
          {allCollumns.includes('perfil') && <th>PERFIL DE ACESSO</th>}
          <th>
            <DropDownConditions />
          </th>
        </tr>
      </thead>
      <tbody>{apiList}</tbody>
    </Table>
  );
}
