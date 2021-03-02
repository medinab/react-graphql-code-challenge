import React from 'react';
import User from '../components/Users';
import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
 query users {
   users {
     id
     name
     phone
     email
   }
 }
`;

const UserList = () => {
  const { data } = useQuery(USERS_QUERY);
  return (
    <div>
      <p>List of Users</p>
      {data && (
        <>
          {data.users.map((user) => (
            <User key={user.id} user={user}/>
          ))}
        </>
      )}
    </div>
  );
};

export default UserList;
