
import AllUsersList from '../components/AllUsersList';
import { useFetchUsersTable } from '../hooks/useFetchUsersTable';

export function ListPage() {
  const { usersList } = useFetchUsersTable();

  return (
    <>
       <AllUsersList usersList={usersList} />
    </>
  );
}
