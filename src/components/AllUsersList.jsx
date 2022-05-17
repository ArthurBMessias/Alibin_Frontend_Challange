import { Table } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiEditAlt } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';

export function AllUsersList({ onEdit }) {
  const { usersList, deleteUser } = useFetchUsersTable();
  return (
    <Table striped bordered hover>
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
      <tbody>
        {usersList &&
          usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>{user.website}</td>
              <td>
                <BiEditAlt 
                  onClick={ () => onEdit(user) } 
                  type='button'
                 />
              </td>
              <td>
                <TiDelete 
                  type='button'
                  onClick={ () => deleteUser(user.id)} 
                />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default AllUsersList;
