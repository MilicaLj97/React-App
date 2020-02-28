import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cardData from './cardData';


const useStyles = makeStyles(theme => ({
  bar:{
    backgroundColor:'black!important',
    left: '50',
    bottom: '0',
    position: 'fixed',
    width: '100%',
    height: 50,    
  },
  tekst:{
    marginLeft: 15,
    fontSize: 21,
    color: 'white!important'
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
 
  return (
    <div className={classes.bar}>
          <p className={classes.tekst}>
          {cardData.map(tile => (
           
              tile.company
          
          ))}
          </p>
    </div>
  );
}