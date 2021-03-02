import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 'auto',
    width: 350,
  },
}));

const User = (props) => {
  const { user, index } = props
  const classes = useStyles();
  const [raised, setRaised] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRaised = () => setRaised(!raised);  
  const toggleDropdown = () => setOpen(!open);

  return (
    <Card
      onMouseOver={toggleRaised}
      onMouseOut={toggleRaised}
      raised={raised}
      className={classes.card}>
      <CardContent>
        <Typography color="textSecondary">
          Name
        </Typography>
        <Typography variant="h5">
          {user.name}
        </Typography>
        <List key={user.id + index}>
          <ListItem button onClick={toggleDropdown}>
            <ListItemText primary="Contact Information"/>
            {open ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem component="a" href={"mailto:" + user.email}>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.email}/>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.phone}/>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
};

export default User;
