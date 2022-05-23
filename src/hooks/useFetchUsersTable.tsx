import { createContext, useEffect, useState, useContext } from 'react';
import IEditUserProps from '../Interfaces/IEditUserProps';
import IUser from '../Interfaces/IUser';
import IUserContextData from '../Interfaces/IUserContextData';
import IUsersProviderProps from '../Interfaces/IUsersProviderProps';

const UsersContext = createContext<IUserContextData>({} as IUserContextData);

export const UsersProvider = ({ children }: IUsersProviderProps) => {
  const [usersList, setUsersList] = useState<IUser[]>(() => {
    const storagedUsers = localStorage.getItem('users');
    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });
  const [name, setName] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        if (usersList.length === 0) setUsersList(data);
      });
  }, []);

  function updateUser(editedUser: IEditUserProps) {
    const updatedUsersList = [...usersList];
    const userExists = updatedUsersList.find(
      (user) => user.id === editedUser.id
    );
    if (userExists) {
      userExists.name = editedUser.name;
      userExists.email = editedUser.email;
      userExists.company.name = editedUser.companyName;
      setUsersList(updatedUsersList);
      localStorage.setItem('users', JSON.stringify(updatedUsersList));
    }
  }

  function deleteUser(id: string) {
    const updatedUsersList = [...usersList];
    const userIndex = updatedUsersList.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      updatedUsersList.splice(userIndex, 1);
      setUsersList(updatedUsersList);
      localStorage.setItem('users', JSON.stringify(updatedUsersList));
    }
  }
  return (
    <UsersContext.Provider
      value={{
        usersList,
        setUsersList,
        updateUser,
        deleteUser,
        name,
        setName,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
export function useFetchUsersTable() {
  const context = useContext(UsersContext);
  return context;
}

// export const useFetchUsersTable = () => {
//   const [usersList, setUsersList] = useState([]);
//   const [isUserListUpdated, setIsUserListUpdated] = useState(false);
//   const [newUser, setNewUser] = useState([false]);
//   const [standard, setStandard] = useState(true);
//   const [allColumns, setAllColumns] = useState(['name', 'email', 'client', 'perfil']);


//   function filterColumn(isChecked) {
//     if (isChecked === true) return setStandard(!isChecked)
//   }

//   return {
//     allColumns,
//     setAllColumns,
//     standard,
//     setStandard,
//     filterColumn,
//   };
// };
