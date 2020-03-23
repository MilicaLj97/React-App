import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';


const tileData = [
    {
        id: 0,
        icon:  <HomeIcon/>,
        title: 'Home',
        url: 'Home',
        tab: 'todo Home',
        
        
    },
    {
      id: 1,
      icon: <AccessibilityNewIcon/>,
      title: 'Players',
      url: 'Players',
      tab: 'todo Players',
      
    },
    {
      id: 2,
      icon:  <AppsIcon/>,
      title: 'Skills',
      url:'Skills',
      tab: 'todo Skills'
    },
    {
      id: 3,
      icon:  <SportsEsportsIcon/>,
      title: 'Games',
      url:'Games',
      tab: 'todo Games'
      
    },
      
  ];
  
  export default tileData;