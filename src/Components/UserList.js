import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '../Components/AppBar';
import userData from '../Data/userData';
import { TabContext, TabValueContext, CardContext } from '../Helpers/tabContext';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PageShowing from '../Components/PageShowing';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Dialog } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import cardData from '../Data/cardData';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow:'hidden',
  },

}));
const InputStyle = {
  width: 150, 
  marginRight:20,
  flex:'none',
  overflow:'hidden',
};
const InputDetailStyle = {
  overflow:'hidden',
};


export default function SimpleList() {
  const classes = useStyles();
  const {cardValue, setCardValue} = React.useContext(CardContext);
  const defaultList = userData;
  const [list, updateList] = useState(defaultList);

  
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [details, setDetails] = useState("");

  
  function handleRemoveItem(id) {
  
      if (window.confirm("Are you sure you want to remove this item?"))
      {
        updateList(list.filter(tile => tile.id !== id));
      }
      else{}
      
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (id) => {
    setAnchorEl(2);
    sessionStorage.setItem("detailState", id );
  };  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleUpdate = () => {
    
    updateList([...list, { title: title, status: status, details: details}]);
}
  

  return (
    <div className={classes.root} >
      <AppBar/>

      <Divider />
      <form>
      <input type="text"   onChange ={ (e) => setTitle(e.target.value)} />
      <input type="text"   onChange ={ (e)=> setStatus(e.target.value)} />
      <input type="text"   onChange ={ (e)=> setDetails(e.target.value)} />
      <Button onClick={handleUpdate}>update</Button>
      </form>
      
      <List component="nav" aria-label="main mailbox folders">
      {list.map(tile => (
        
      <ListItem key={tile.id} >
      <ListItemAvatar>
          <Avatar src = {tile.img}/>
          </ListItemAvatar>
          <ListItemText primary={tile.title} style={InputStyle}/>
          <ListItemText primary={tile.status} style={InputStyle}/>
          <ListItemText primary={tile.details} style={InputDetailStyle}/>
          <IconButton aria-label="previous" onClick={ (e) => handleClick(tile.id)}>
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
          <IconButton aria-label="play/pause" onClick={(e)=>  {handleRemoveItem(tile.id)}}>
            <MoreHorizIcon className={classes.icon} />
          </IconButton>
          
          </ListItem>
        
      ))}
      <Divider />
      </List>
      <PageShowing/>
    </div>
  );
}
