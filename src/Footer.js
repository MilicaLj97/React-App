import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cardData from './cardData';
import logo from './dtc.jpg';
import ContactImg from './Contact-Info.jpg';


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
  tekst:{
    marginLeft: 15,
    fontSize: 21,
    color: 'white!important'
  }
}));

const BarStyle = {

  textAlign:' right',
  marginLeft: 778,
};

export default function SearchAppBar() {
  const classes = useStyles();
 
  return (
    
    <div className={classes.bar} >
      <div>
          <a href="https://www.dtc.rs"> <img border="1" alt="DTC" src={logo} width="100"/> </a>
      </div>
      <div>
          <a href="https://www.dtc.rs"> <p style={BarStyle}>Copy right info</p> </a>
      </div> 
      <div>
          <a href="https://www.dtc.rs"> <img border="1" alt="DTC" src={ContactImg} width="100" style={BarStyle}/> </a>
      </div>
    </div>
   
  );
} 
   