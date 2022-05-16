export function AllUsersList({ usersList }) {
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
        {usersList &&
          usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>{user.website}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default AllUsersList;
