import React, { Component} from 'react';
import UserList from '../src/components/UserList';
import Container from '@material-ui/core/Container';

class App extends Component {
  render() { 
    return (
      <Container maxWidth="md">
        <div>
          <h1>User Directory</h1>
          <UserList/>
        </div>
      </Container>
    )
  }
};

export default App;
