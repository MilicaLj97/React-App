import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import CreateRole from '../Components/CreateRole';
import UserList from '../Components/UserList';
import RoleList from '../Components/RoleList';
import UserPage from '../Components/UserPage';
import SubmitPage from '../Components/SubmitPage';
import TodoList from '../Components/TodoList';
import ModifyRole from '../Components/ModifyRole';
import ModifyUser from '../Components/ModifyUser';
import UserDetail from '../Components/UserDetail';
import ProjectList from '../Components/ProjectList';

const tileData = [
    {
        id: 0,
        icon:  <HomeIcon/>, 
        title: 'Home',
        url: 'Home',
        tab: 'todo Home',
        tabValue: 'todo',
        cardValue: <ModifyRole/>,
    },
    {
      id: 1,
      icon: <AccessibilityNewIcon/>,
      title: 'Users',
      url: 'Users',
      tab: <UserList/>,
      tabValue: <UserPage/>,
      cardValue: <UserDetail/>,
    },
    {
      id: 2,
      icon:  <AppsIcon/>,
      title: 'Projects',
      url:'Projects',
      tab: <ProjectList/>,
      tabValue: <SubmitPage/>,
      cardValue: <ModifyRole/>,
      
    },
    {
      id: 3,
      icon:  <SportsEsportsIcon/>,
      title: 'Roles',
      url:'Roles',
      tab: <RoleList/>,
      tabValue: <CreateRole/>,
      cardValue: <ModifyRole/>,
    },
    
      
  ];
  
  export default tileData;