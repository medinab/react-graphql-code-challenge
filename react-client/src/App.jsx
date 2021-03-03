import React, { useState } from 'react';
import UserList from '../src/components/UserList';
import Header from './components/Header'
import Container from '@material-ui/core/Container';
import Home from './components/Home';


function App () {
  return (
    <Container maxWidth="md">
      <Home />
    </Container>
  )
};

export default App;
