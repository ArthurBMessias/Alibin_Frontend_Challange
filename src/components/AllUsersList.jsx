import { Table } from 'react-bootstrap';
import { BiEditAlt, BiDotsVerticalRounded } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';

export function AllUsersList({ usersList }) {
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
                <BiEditAlt />
              </td>
              <td>
                <TiDelete />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default AllUsersList;
