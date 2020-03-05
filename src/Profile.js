import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
// import VerticalTabs from './ProfileTabs';
import SimpleList from './ProfileList';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
    backgroundColor:'white!important',
    boxShadow:'8px 8px 5px lightgrey', 
    width:'40%',
    height:700,
    padding:20,
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    
    <div className="Profile">
     
      <ProfileHeader/>
        <div className={classes.root}> 
        <ProfileCard/> 
        <SimpleList/>
        </div>
      
    </div>
    
  );
}

export default Profile;

