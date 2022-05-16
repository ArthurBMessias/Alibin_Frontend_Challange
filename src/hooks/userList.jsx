import { useEffect, useState } from 'react';

export const UserListTable = () => {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsersList(data))
      .catch((error) => setError(error)),
    []
  );
  return {
    usersList,
    error,
  };
};
