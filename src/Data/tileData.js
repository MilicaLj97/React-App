import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import RoleList from '../Components/RoleList';
import CreateRole from '../Components/CreateRole';
import Card from '../Components/Card';
import UserList from '../Components/UserList';
import UserPage from '../Components/UserPage';
import SubmitPage from '../Components/SubmitPage';
import TodoList from '../Components/TodoList';
const tileData = [
    {
        id: 0,
        icon:  <HomeIcon/>,
        title: 'Home',
        url: 'Home',
        tab: 'todo Home',
        tabValue: 'todo',
        
    },
    {
      id: 1,
      icon: <AccessibilityNewIcon/>,
      title: 'Users',
      url: 'Users',
      tab: <UserList/>,
      tabValue: <UserPage/>,
      
    },
    {
      id: 2,
      icon:  <AppsIcon/>,
      title: 'Projects',
      url:'Projects',
      tab: <TodoList/>,
      tabValue: <SubmitPage/>,
    },
    {
      id: 3,
      icon:  <SportsEsportsIcon/>,
      title: 'Roles',
      url:'Roles',
      tab: <RoleList/>,
      tabValue: <CreateRole/>,
      
    },
    
      
  ];
  
  export default tileData;