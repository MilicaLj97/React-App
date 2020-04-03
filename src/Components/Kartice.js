import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from './Card';
import RoleCard from './RoleCard';

import { TabContext, TabValueContext } from '../Helpers/tabContext';



const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex',
  },
  left: {
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
    backgroundColor:'white!important',
    boxShadow:'8px 8px 5px lightgrey', 
    width:'25%',
    height:780,
    padding:20,
    display:'grid',
    overflow: 'hidden',
  },
  right:{
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
    backgroundColor:'white!important',
    boxShadow:'8px 8px 5px lightgrey', 
    width:'69%',
    height:780,
    padding:20,
    overflow: 'auto',
  },
  card:{
    width:'100%',
  },
  tags:{
    width:'100%',
  },
  list:{
    width:'100%',
  }
}));

function Profile() {

  const [tab, setTab] = useState(null);
  const [tabValue, setTabValue] = useState(null);
  const classes = useStyles();
  
  
    return (
    <TabContext.Provider value={{tab, setTab}}>
    <TabValueContext.Provider value={{tabValue, setTabValue}}>

        <div className={classes.right}><Card/></div>
        <div className={classes.right}><RoleCard/></div>
         
   
     </TabValueContext.Provider>
    </TabContext.Provider>
    
   
    
  );
}

export default Profile;

