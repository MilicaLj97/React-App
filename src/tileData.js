import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';


const tileData = [
    {
        icon:  <HomeIcon/>,
        title: 'Home',
        url: 'Home',
        
    },
    {
      icon: <AccessibilityNewIcon/>,
      title: 'Players',
      url: 'Players',
      
    },
    {
      icon:  <AppsIcon/>,
      title: 'Skills',
      url:'Skills',
    },
    {
      icon:  <SportsEsportsIcon/>,
      title: 'Games',
      url:'Games',
    },
      
  ];
  
  export default tileData;