
import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from './AppBar';
import roleData from '../Data/roleData';
import { TabContext, TabValueContext, CardContext } from '../Helpers/tabContext';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PageShowing from './PageShowing';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Popover from '@material-ui/core/Popover';
import cardData from '../Data/cardData';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

}));



export default function SimpleList() {
  const classes = useStyles();
  const {tab, setTab} = React.useContext(TabContext);
  const {tabValue, setTabValue} = React.useContext(TabValueContext);
  const {cardValue, setCardValue} = React.useContext(CardContext);

  const defaultList = roleData;

  const [list, updateList] = useState(defaultList);
  
  function handleRemoveItem(id) {
  
      if (window.confirm("Are you sure you want to remove this item?"))
      {
        updateList(list.filter(tile => tile.id !== id));
      }
      else{}
      
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

  return (
    <div className={classes.root}>
      <AppBar/>

      <Divider />

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
            <EditRoundedIcon className={classes.icon}/>
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
            <DeleteRoundedIcon onClick={(e)=>  {handleRemoveItem(tile.id)}} className={classes.icon}/>
          </IconButton>
        </ListItem>
      ))}
      <Divider />
      </List>
      <PageShowing/>

    </div>
  );
}
