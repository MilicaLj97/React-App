import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex-inline',
    padding: 20,
    overflow: 'hidden',
    position: 'fixed',
    bottom:' 30px',
    right: 0,
  },
}));

export default function PaginationButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={10} showFirstButton showLastButton />
    </div>
  );
}