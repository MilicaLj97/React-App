import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import userData from '../Data/userData';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex-inline',
      float: 'left',
      padding: 10,
      
    },
    superdiv: {
      display: 'flex',
      width: 'auto',
      height: 155, 
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      
    },
    content: {
      flex: '1 0 auto',
      width: 320,
    },
    cover: {
      width: 151,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    labela:{
  
        width:'50%',
    },
    buttonUpdate:{
        backgroundColor:'#e4100b',
        marginLeft:'10px',
        marginTop:20,
        marginBottom:10,
      },
      buttonCancel:{
        backgroundColor:'grey',
        marginTop:20,
        marginBottom:10,
        marginLeft:15,
      },
  })); 
  const InputStyle = {
    width: 300, 
  };
  const buttonStyle = {
    textTransform: 'none',
    
  };


export default function TitlebarGrid() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    return (
     
  <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Details
    </Button>
    <Dialog open={open} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Details</DialogTitle>
  {userData.map(tile => (
  
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
        <div className={classes.labela}>
            <Button  onClick={handleClose} style={buttonStyle} className={classes.buttonCancel} color="inherit">Close</Button>
        </div>
    </div>
    
    ))}
    </Dialog>
  </div>
    );
  }