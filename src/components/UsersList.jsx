import { UserListTable } from '../hooks/userList';

const allUsersList = () => {
  const { user } = UserListTable;

  return (
    <table>
      <thead>
        <tr>
          <th>USUÁRIO</th>
          <th>EMAIL</th>
          <th>CLIENTE</th>
          <th>PERFIL DE ACESSO</th>
        </tr>
      </thead>
      <tbody>
        {user.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company[0]}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default allUsersList;
