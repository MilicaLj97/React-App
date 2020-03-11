import React,{useState, useContext} from 'react';
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
import { TabContext } from './useContext';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function SimpleList() {
  const classes = useStyles();
  const {tab, setTab} = React.useContext(TabContext);
  
  

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

      <List component="nav" aria-label="main mailbox folders">
      {tileData.map(tile => (<ListItem onClick={(e)=>  {setTab(tile.tab)}} button key={tile.id} >
          <ListItemIcon>
            {tile.icon}
          </ListItemIcon>
          <ListItemText primary={tile.title} />
        </ListItem>
        
      ))}
     
      </List>
    </div>
  );
}