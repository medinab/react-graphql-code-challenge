import React from 'react';
import UserList from '../src/components/UserList';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  appBar: {
    backgroundColor: '#4E4870'
  },
  title: {
    flexGrow: 1,
  },
}));


function App () {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <ToolBar>
            <Typography variant="h6" align="center" className={classes.title}>User Directory</Typography>
          </ToolBar>
        </AppBar>
      </div>
      <div>
        <UserList/>
      </div>
    </Container>
  )
};

export default App;
