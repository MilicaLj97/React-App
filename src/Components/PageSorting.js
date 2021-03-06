import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import cardData from '../Data/cardData';
import selectData from '../Data/selectData';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex-inline',
    padding: 10,
    overflow: 'hidden',
    position: 'fixed',
    bottom:' 50px',
    right: 0,
  },
  superdiv: {
    borderRadius:'5px',
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 8px 0 rgba(0, 0, 0, 0.2)',
    display: 'flex',
    width: '109%',
    height: 'auto', 

  },
  labela:{
    marginLeft:1150,
    width:'50%',
    marginBottom:'20px',
    marginRight:50,
  },
  tekst:{
      marginLeft:0,
      marginTop: 2,
      marginBottom:2,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    marginRight:50,
  },
  textField:{
      padding:10,
  },

})); 




export default function TitlebarGridList() {
  const classes = useStyles();
  
  const [state, setState] = useState("5");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setState(event.target.value);
    sessionStorage.setItem("page", event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const handleUpdate = () =>
  {
    updateList(roleData);
    updateList(list.slice(0, page));
   
  };
  const handleUpdate2 = () =>
  {
    
    
    updateList(roleData);
  };

  return (
    
<div>

  
      <Button onClick={handleUpdate}>Slice</Button>
      <Button onClick={handleUpdate2}>Reset</Button>

    <div className={classes.root}>
      <div className={classes.superdiv}>

        <form>
            
            <div className={classes.labela}>
                <p className={classes.tekst}>Showing 1 - {state} of {cardData.length}</p>
                <FormControl className={classes.formControl}>
        
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={state}
          onChange={handleChange}
        >
        {selectData.map(tile => (
  
          <MenuItem value={tile.num}>
          {tile.title}
          </MenuItem>
          ))}
          
        </Select>
      </FormControl>
            </div>

      </form>
      
    </div>
  </div>

</div>
  );
}