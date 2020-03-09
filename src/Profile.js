import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
// import VerticalTabs from './ProfileTabs';
import SimpleList from './ProfileList';
import ProfileTags from './ProfileTags';
import BasicInformationCard from './BasicInformationCard';


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
  const classes = useStyles();

  return (
    
    <div className="Profile" >
     
      <ProfileHeader/>
      <div className={classes.root}>
        <div className={classes.left}> 
          <div className={classes.card}><ProfileCard/></div>
          <div className={classes.tags}><ProfileTags/></div> 
          <div className={classes.list}><SimpleList/></div>
        </div>
        <div className={classes.right}>
          <BasicInformationCard/>
        </div>
      </div>
    </div>
    
  );
}

export default Profile;

