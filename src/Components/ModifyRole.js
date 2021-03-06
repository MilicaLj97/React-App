import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import basicData from '../Data/basicData';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex-inline',
    float: 'left',
    padding: 30,
    paddingTop:5,
    overflow: 'hidden',
    //marginLeft: 50,
    width: '80%',
  },
  superdiv: {
    borderRadius:'5px',
    //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 8px 0 rgba(0, 0, 0, 0.2)',
    display: 'flex',
    width: '109%',
    height: 'auto', 

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: 500,
  },
  cover: {
    width: 151,
    height:151,
    marginLeft:10,
    marginRight:536,
    borderRadius:'5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 8px 0 rgba(0, 0, 0, 0.2)'
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: theme.spacing(1),
    height:'50px!important',
    marginTop: 'auto',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  labela:{
    width:'100%',
  },
  tekst:{
      marginLeft:15,
      marginTop: 2,
      marginBottom:2,
  },
  bar:{
    width:'inherit',
    marginLeft:'10px',
    height:'35px',
    borderRadius:'5px',
  },
  grid:{
      display:'block',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    marginRight:50,
  },
  textField:{
      padding:10,
  },
  description:{
    marginLeft: 15,
    marginTop: 2,
    marginBottom:2,
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

export default function TitlebarGridList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
  };

const [selectedDate, setSelectedDate] = React.useState(new Date());

const handleDateChange = date => {
    setSelectedDate(date);
};

const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());

const handleDateChangeTo = date => {
    setSelectedDateTo(date);
};

  return (
    
<div>
<Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Modify role 
</Button>
<Dialog open={open} aria-labelledby="form-dialog-title">
<DialogTitle id="form-dialog-title">Modify role</DialogTitle>
{basicData.map(tile => (

    <div className={classes.root}>
      <div className={classes.superdiv}>

        <form>
            <div className={classes.labela} >
                <p className={classes.tekst}>Name</p>
                <TextField style={InputStyle} className={classes.textField} id="outlined-basic"  variant="outlined" />
            </div>

            <MuiPickersUtilsProvider  className={classes.labela} utils={DateFnsUtils}>
                <p className={classes.tekst}>Availability From</p>
                <KeyboardDatePicker style={InputStyle} className={classes.textField}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                'aria-label': 'change date',
                 }}
                />
            </MuiPickersUtilsProvider >

            <MuiPickersUtilsProvider  className={classes.labela} utils={DateFnsUtils}>
                <p className={classes.tekst}>Availability To</p>
                <KeyboardDatePicker style={InputStyle} className={classes.textField}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDateTo}
                onChange={handleDateChangeTo}
                KeyboardButtonProps={{
                'aria-label': 'change date',
                 }}
                />
            </MuiPickersUtilsProvider >

            <div className={classes.labela}>
                <p className={classes.description}>Description</p>
                <TextField style={InputStyle}
                className={classes.textField}
                id="outlined-multiline-static"
                multiline
                rows="4"
                variant="outlined"
                />
            </div>
            <div className={classes.labela}>
            <Button  onClick={handleClose} style={buttonStyle} className={classes.buttonCancel} color="inherit">Cancel</Button>
            <Button onClick={handleClose} style={buttonStyle} className={classes.buttonUpdate} color="inherit">Modify Role</Button>
            </div>
      </form>
      
    </div>
  </div>
  ))}
</Dialog>
</div>
  );
}