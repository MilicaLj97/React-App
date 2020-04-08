
import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from './AppBar';
import projectData from '../Data/projectData';
import { TabContext, TabValueContext } from '../Helpers/tabContext';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PageShowing from './PageShowing';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

}));
const InputStyle = {
  width: 150, 
  marginRight:20,
  flex:'none',
  overflow:'hidden',
};
const InputDetailStyle = {
  overflow:'hidden',
};


export default function SimpleList() {
  const classes = useStyles();
  const {tab, setTab} = React.useContext(TabContext);
  const {tabValue, setTabValue} = React.useContext(TabValueContext);

  return (
    <div className={classes.root}>
      <AppBar/>

      <Divider />

      <List component="nav" aria-label="main mailbox folders">
      {projectData.map(tile => (
        <ListItem button key={tile.id} >
          <ListItemAvatar>
          <Avatar src = {tile.img}/>
          </ListItemAvatar>
          <ListItemText primary={tile.title} style={InputStyle}/>
          <ListItemText primary={tile.status} style={InputStyle}/>
          <ListItemText primary={tile.details} style={InputDetailStyle}/>
          <IconButton aria-label="previous" >
            <MoreHorizIcon className={classes.icon}/>
          </IconButton>
          <IconButton aria-label="play/pause">
            <MoreHorizIcon className={classes.icon}/>
          </IconButton>
        </ListItem>
      ))}
      <Divider />
      </List>
      <PageShowing/>

    </div>
  );
}
