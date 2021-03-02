import React from 'react';


const User = (props) => {
  const { user } = props
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.phone}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
};

export default User;
