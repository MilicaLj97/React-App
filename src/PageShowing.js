import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import status from './autocompleteData';


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
    marginLeft:1200,
    width:'50%',
  },
  tekst:{
      marginLeft:12,
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
const InputStyle = {
  width: 110,
  
};



export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    
<div>

    <div className={classes.root}>
      <div className={classes.superdiv}>

        <form>
            
            <div className={classes.labela}>
                <p className={classes.tekst}>Showing 1 - 10 of 4</p>
            <Autocomplete 
              className={classes.textField}
              id="combo-box-demo"
              options={status}
              getOptionLabel={option => option.title}
              style={{ width: 300 }}
              renderInput={params => <TextField style={InputStyle} {...params} variant="outlined" />}
            />
            </div>

      </form>
      
    </div>
  </div>

</div>
  );
}