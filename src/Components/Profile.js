import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import SimpleList from './ProfileList';
import ProfileTags from './ProfileTags';
import VerticalTabs from './ProfileTabs';

import { TabContext, TabValueContext, CardContext } from '../Helpers/tabContext';



const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex',
  },
  left: {
    marginTop:0,
    marginLeft:10,
    marginBottom:10,
    backgroundColor:'white!important',
    boxShadow:'8px 8px 5px lightgrey', 
    width:'25%',
    height:800,
    padding:20,
    display:'grid',
    overflow: 'hidden',
  },
  right:{
    marginTop:0,
    marginLeft:10,
    marginBottom:10,
    backgroundColor:'white!important',
    boxShadow:'8px 8px 5px lightgrey', 
    width:'71.5%',
    height:840,
    padding:0,
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
  const [cardValue, setCardValue] = useState(null);
  const classes = useStyles();
  
  
    return (
    <TabContext.Provider value={{tab, setTab}}>
    <TabValueContext.Provider value={{tabValue, setTabValue}}>
    <CardContext.Provider value={{cardValue, setCardValue}}>
      <div className="Profile" >
     
     <ProfileHeader/>
     <div className={classes.root}>
       <div className={classes.left}> 
         <div className={classes.card}><ProfileCard/></div>
         <div className={classes.tags}><ProfileTags/></div> 
         <div className={classes.list}><SimpleList/></div>
       </div>
       <div className={classes.right}><VerticalTabs/></div>
         
       </div>
       
     </div>
     </CardContext.Provider>
     </TabValueContext.Provider>
    </TabContext.Provider>
    
   
    
  );
}

export default Profile;

