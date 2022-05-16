import { useEffect, useState } from 'react';

export const useFetchUsersTable = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsersList(data));
  }, []);

  return {
    usersList,
  };
};
