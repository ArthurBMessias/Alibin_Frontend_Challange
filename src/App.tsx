import { UsersProvider } from "./hooks/useFetchUsersTable";
import { ListPage } from "./pages/ListPage";

export function App() {
  return (
    <UsersProvider>
      <ListPage />
    </UsersProvider>
  );
}

export default App;
