import React, { Component} from 'react';
import UserList from '../src/components/UserList';


class App extends Component {
  render() { 
    return (
      <div>
        <h1>User Directory</h1>
        <UserList/>
      </div>
    )
  }
};

export default App;
