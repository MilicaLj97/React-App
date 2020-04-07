
import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from './AppBar';
import roleData from '../Data/roleData';
import { CardContext } from '../Helpers/tabContext';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PageShowing from './PageShowing';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Popover from '@material-ui/core/Popover';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function SimpleList() {
  const classes = useStyles();
  const {cardValue} = React.useContext(CardContext);

  const defaultList = roleData;

  const [list, updateList] = useState(defaultList);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [severity, setSeverity] = useState('');
  const [snack, setSnack] = useState('');
  const page = parseInt(sessionStorage.getItem("page"));

  function handleRemoveItem(id) {
  
      if (window.confirm("Are you sure you want to remove this item?"))
      {
        updateList(list.filter(tile => tile.id !== id));
        setOpenSnack(true);
        setSeverity("success");
        setSnack("Remove successful");
      }
      else{
        setOpenSnack(true);
        setSeverity("error");
        setSnack("Remove cancelled");
      }
      
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
 
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <div className={classes.root}>
      <AppBar/>
      
      <List component="nav" aria-label="main mailbox folders">
      {list.map((tile, index) => (
        <ListItem button key={tile.id} >
          <ListItemAvatar>
          <Avatar src = {tile.img}/>
          </ListItemAvatar>
          <ListItemText primary={tile.title}/>
          <ListItemText primary={tile.AvailabilityFrom} />
          <ListItemText primary={tile.AvailabilityTo} />
          <ListItemText primary={tile.details}/>
          <IconButton aria-label="previous" onClick={handleClick}>
            <MoreHorizIcon className={classes.icon}/>
          </IconButton>
          <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
      
      
        {cardValue}


        </Popover>
          <IconButton aria-label="play/pause">
            <MoreHorizIcon onClick={(e)=>  {handleRemoveItem(tile.id)}} className={classes.icon}/>
          </IconButton>
        </ListItem>
      ))}
      <Divider />
      </List>
      <PageShowing/>
      <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity={severity}>
          {snack}
        </Alert>
      </Snackbar>

    </div>
  );
}
