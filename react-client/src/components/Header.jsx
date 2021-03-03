import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <ToolBar>
          <Typography variant="h6" align="center" className={classes.title}>User Directory</Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;
