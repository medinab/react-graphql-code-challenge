import React from 'react';
import User from '../components/Users';
import { useQuery, gql } from '@apollo/client';
import Grid from '@material-ui/core/Grid';

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
    <div style={{ height: '100%' }}>
      <Grid container spacing={2}>
        {data && (
          <>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                  {data.users.map((user, index) => (
                    
                    <Grid key={user.id + index } item>
                      <User key={user.id + index } user={user} index={index}/>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default UserList;
