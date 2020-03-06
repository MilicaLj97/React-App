import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import tagsData from './tagsData';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
      backgroundColor:'#bf1818',
    },
    marginLeft:10,
    justifyContent:'left',

  },
}));

export default function Chips() {
  const classes = useStyles();

  return (

   
      <div className={classes.root}>
      {tagsData.map(tile => (
        <Chip label={tile.text} />
      
      ))}
      </div>
  );
}