import { useEffect, useState } from "react";

export const useFetchUsersTable = () => {
  const [usersList, setUsersList] = useState([]);
  const [isUserListUpdated, setIsUserListUpdated] = useState(false);
  const [newUser, setNewUser] = useState([false]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsersList(data));
  }, []);

  function updateUser(editedUser) {
    const updatedUsersList = [...usersList];
    const userExists = updatedUsersList.find(
      (user) => user.id === editedUser.id
    );
    if (userExists) {
      userExists.name = editedUser.name;
      userExists.email = editedUser.email;
      userExists.company.name = editedUser.companyName;
      userExists.website = editedUser.website;
      localStorage.setItem("users", JSON.stringify(updatedUsersList))
      setNewUser(updatedUsersList);
    }
  }

  function deleteUser(id) {
    setUsersList(usersList.filter((user) => user.id !== id));
  }

  return {
    usersList,
    setUsersList,
    updateUser,
    deleteUser,
    isUserListUpdated,
    setIsUserListUpdated,
  };
};