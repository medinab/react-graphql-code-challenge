import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';

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


const Header = (props) => {
  const classes = useStyles();
  const handleSearchCallback = (searchTerm) => {
    console.log('this is header: ' + searchTerm);
    props.onSearch(searchTerm);
  }


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <ToolBar>
          <Typography variant="h6" align="center" className={classes.title}>User Directory</Typography>
          <Search onSearch={handleSearchCallback}/>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;
