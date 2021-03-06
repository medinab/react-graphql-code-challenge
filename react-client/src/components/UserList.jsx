import React from 'react';
import User from '../components/Users';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
 query users {
   users {
     id
     name
     phone
     email
   }
 }`;

const UserList = () => {
  const { data } = useQuery(USERS_QUERY);
  return (
    <div style={{ height: '100%' }}>
      <Grid container justify="center" spacing={2}>
        {data && (
          <>
          {data.users.map((user) => (
            <Grid key={user.id} item>
              <User key={user.id} user={user}/>
            </Grid>
          ))}
          </>
        )}
      </Grid>
    </div>
  );
};

export default UserList;
