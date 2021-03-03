import React from 'react';
import UserList from '../src/components/UserList';
import Header from './components/Header';
import Container from '@material-ui/core/Container';

function App () {
  return (
    <Container maxWidth="md">
      <Header />
      <UserList />
    </Container>
  )
};

export default App;
