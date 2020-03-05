import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import tileData from './tileData';
import VerticalTabs from './ProfileTabs'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function handleMenuClick(title, url){
 
    window.location.href='/'+ url;
    
    sessionStorage.setItem('myProfileListStorage', title);
  }
  

export default function SimpleList() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <PermIdentityOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Basic information" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <VpnKeyOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Password management" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LockOpenOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Authorization" />
        </ListItem>
      </List>
      <Divider />
      <VerticalTabs/>
    </div>
  );
}
