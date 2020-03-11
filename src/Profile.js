import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import SimpleList from './ProfileList';
import ProfileTags from './ProfileTags';
import VerticalTabs from './ProfileTabs';
import { TabContext } from './useContext';




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
    width:'40%',
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
    width:'54%',
    padding:20,
    overflow: 'hidden',
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
  const providerValue = React.useMemo(() => ({tab, setTab}), [tab, setTab])
  const classes = useStyles();
  
  
    return (
    <TabContext.Provider value={{tab, setTab}}>
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
    </TabContext.Provider>
    
   
    
  );
}

export default Profile;

