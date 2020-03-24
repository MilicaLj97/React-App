import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import tagsData from './tagsData';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

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

const buttonStyle = {
  textTransform: 'none',
  backgroundColor:'white',
  
};


export default function Chips() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  ////POPVER////

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePop = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? 'simple-popover' : undefined;
  const buttonStyle = {
    textTransform: 'none',
    
  };

  return (
    
      <div className={classes.root}>
        <Button Button onClick={handleClickOpen} style={buttonStyle}>#</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>New tag name</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
                <MenuItem value="">
                </MenuItem>
                <TextField  id="outlined-basic"  variant="outlined" />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen} color="primary">
            OK
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Popover
        id={id}
        open={openPop}
        anchorEl={anchorEl}
        onClose={handleClosePop}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        
          <Button onClick={handleClose} color="primary" style={buttonStyle} >
            <EditRoundedIcon/>Rename
          </Button>
          <Button onClick={handleClose} color="primary" style={buttonStyle} >
          <DeleteRoundedIcon/>Delete
          </Button>
      </Popover>
      
      {tagsData.map(tile => (
        <Tooltip title={tile.text} aria-label="add">
          <Chip  label={tile.text} aria-describedby={id} variant="contained" onClick={handleClick}/>
        </Tooltip>
        
      
      ))}
      </div>
  );
}