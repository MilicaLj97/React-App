import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../slike/dtc.jpg';
import ContactImg from '../slike/Contact-Info.jpg';


const useStyles = makeStyles(theme => ({
  bar:{
    backgroundColor:'black!important',
    left: '50',
    bottom: '0',
    position: 'fixed',
    width: '100%',
    height: 52,   
    display:'flex',   
    //width: '32.1%',
    //textAlign:' right',
  },
}));

const BarStyle = {
  float:'right',
  textAlign:' right',
  marginLeft: 780,
  position:'fixed',
};
const ContactStyle = {
  float:'right',
  textAlign:' right',
  right:0,
  marginLeft:'-250px',
  position:'fixed',
};

export default function SearchAppBar() {
  const classes = useStyles();
 
  return (
    
    <div className={classes.bar} >
      <div>
          <a href="https://www.dtc.rs"> <img border="1" alt="DTC" src={logo} width="100"/> </a>
      </div>
      <div>
          <a href="https://www.dtc.rs"> <p style={BarStyle}>Copyright info</p> </a>
      </div> 
      <div>
          <a href="https://www.dtc.rs"> <img border="1" alt="DTC" src={ContactImg} width="100" style={ContactStyle}/> </a>
      </div>
    </div>
   
  );
} 
   