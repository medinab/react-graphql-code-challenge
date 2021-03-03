import React from 'react';
import User from '../components/Users';
import Grid from '@material-ui/core/Grid';


const UserList = (props) => {
  const { users } = props;
  // let { data } = useQuery(USERS_QUERY);

  // if (search) {      
  //   let { data } = useQuery(SEARCH_QUERY, {
  //     variables: {search}
  //   });
  // }

  // console.log(search);
  return (
    <div style={{ height: '100%' }}>
      <Grid container justify="center" spacing={2}>
        {users && (
          <>
          {users.map((user, index) => (
            <Grid key={user.id + index } item>
              <User key={user.id + index } user={user} index={index}/>
            </Grid>
          ))}
          </>
        )}
      </Grid>
    </div>
  );
};

export default UserList;
