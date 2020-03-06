import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import profileCardData from './profileCardData';

const useStyles = makeStyles(theme => ({
  root: {
    float: 'left',
    padding: 10,
    width: '100%',
    overflow:'hidden',
  },
  superdiv: {
    display: 'flex',
    width: '100%',
    height: 155,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: '90%',
  },
  cover: {
    width: 151,
    padding:25,  
  },
})); 

 
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
 
<div>
{profileCardData.map(tile => (

    <div className={classes.root}>
      <div className={classes.superdiv}>
      <CardMedia 
      className={classes.cover}
      image={tile.img}
      title="image"
    />
    <div className={classes.details}>

      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {tile.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {tile.status}
        </Typography>
        <Typography variant="subtitle1" >
          {tile.details}
        </Typography>
      </CardContent>
      </div>
    </div>
  </div>
  ))}
</div>
  );
}