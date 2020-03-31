import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '../Components/AppBar';
import userData from '../Data/userData';
import contextTabData from '../Data/contextTabData';
import { TabContext, TabValueContext } from '../Helpers/tabContext';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PageShowing from '../Components/PageShowing';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function SimpleList() {
  const classes = useStyles();
  const {tab, setTab} = React.useContext(TabContext);
  const {tabValue, setTabValue} = React.useContext(TabValueContext);
  

  return (
    <div className={classes.root}>
      <AppBar/>

      <Divider />

      <List component="nav" aria-label="main mailbox folders">
      {userData.map(tile => (<ListItem onClick={(e)=>  { setTab(tile.tab); setTabValue(tile.tabValue); }} button key={tile.id} >
      <ListItemAvatar>
          <Avatar src = {tile.img}/>
          </ListItemAvatar>
          <ListItemText primary={tile.title}/>
          <ListItemText primary={tile.status} />
          <ListItemText primary={tile.details}/>
          <IconButton aria-label="previous" >
            <EditRoundedIcon className={classes.icon}/>
          </IconButton>
          <IconButton aria-label="play/pause">
            <DeleteRoundedIcon className={classes.icon}/>
          </IconButton>
          </ListItem>
        
      ))}
      <Divider />
      </List>
      <PageShowing/>
    </div>
  );
}
