import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    overflow: 'hidden',
    bottom:' 30px',
    right: 0,
    marginLeft:'auto',
  },
  page:{
    backgroundColor:'white!important',
    bottom: '0',
    width: '100%',
    height: 52,   
    display:'flex', 
  },
}));

export default function PaginationButtons() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
    <div className={classes.root}>
      <Pagination count={10} showFirstButton showLastButton />
    </div>
    </div>
  );
}