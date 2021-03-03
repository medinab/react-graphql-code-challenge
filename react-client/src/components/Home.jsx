import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import Header from './Header'
import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
 query GetAllUsers {
   users {
     id
     name
     phone
     email
   }
 }
`;

const SEARCH_QUERY = gql`
 query SearchForUser {
   user(name: $Name) {
     id
     name
     phone
     email
   }
 }
`


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  let {data, error, loading} = useQuery(USERS_QUERY);
  useEffect(() => {

    if (!error && !loading) {
      setUsers(data.users)
    }
  }, [loading, error, data]);

  const handleSearch = (searchTerm) => {
    console.log('in app jsx: ' + searchTerm);
    let {data, error, loading} = useQuery(SEARCH_QUERY, {
      variables: {searchTerm}
    });
  };

  return (
    <div>
      <Header onSearch={handleSearch}/>
      <UserList users={users} />
    </div>
  );
};

export default Home;
