
import AllUsersList from '../components/AllUsersList';
import { UserListTable } from '../hooks/userList';

export function ListPage() {
  const { usersList } = UserListTable();

  return (
    <>
       <AllUsersList usersList={usersList} />
    </>
  );
}
