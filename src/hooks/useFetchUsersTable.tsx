import { createContext, useEffect, useState, useContext } from 'react';
import IEditUserProps from '../Interfaces/IEditUserProps';
import IUserContextData from '../Interfaces/IUserContextData';
import IUsersProviderProps from '../Interfaces/IUsersProviderProps';

export interface IUser {
  id: string;
  name: string;
  email: string;
  company: {
    name: string;
  };
  website: string;
}

export interface ICollumns {
  name: string;
  email: string;
  client: string;
  perfil: string;
}

const UsersContext = createContext<IUserContextData>({} as IUserContextData);

export const UsersProvider = ({ children }: IUsersProviderProps) => {
  const [allCollumns, setAllCollumns] = useState([
    'name',
    'email',
    'client',
    'perfil',
  ]);
  const [isFiveRowsChecked, setIsFiveRowsChecked] = useState(false);
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
      userExists.website = editedUser.website;
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
        allCollumns,
        setAllCollumns,
        isFiveRowsChecked,
        setIsFiveRowsChecked,
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
