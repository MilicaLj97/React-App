import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import tileData from '../Data/tileData';
import contextTabData from '../Data/contextTabData';
import { TabContext, TabValueContext, CardContext } from '../Helpers/tabContext';



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
  const {tabValue, setTabValue} = React.useContext(TabValueContext);
  const {cardValue, setCardValue} = React.useContext(CardContext);

  return (
    <div className={classes.root}>
      

      <List component="nav" aria-label="main mailbox folders">
      {contextTabData.map(tile => (<ListItem onClick={(e)=>  {setTab(tile.tab)}} button key={tile.id} >
          <ListItemIcon>
            {tile.icon}
          </ListItemIcon>
          <ListItemText primary={tile.title} />
          </ListItem>
        
      ))}
     
      </List>
        
      <Divider />

      <List component="nav" aria-label="main mailbox folders">
      {tileData.map(tile => (<ListItem onClick={(e)=>  { setTab(tile.tab); setCardValue(tile.cardValue); setTabValue(tile.tabValue); }} button key={tile.id} >
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
