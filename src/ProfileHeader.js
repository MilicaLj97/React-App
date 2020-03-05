import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
  },
  bar:{
    backgroundColor:'darkred!important',
  }, 
}));

export default function SearchAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.bar}>

          <h3>Project profile</h3>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}