import React from 'react';
import RoleList from '../Components/RoleList';
import CreateRole from '../Components/CreateRole';
import UserPage from '../Components/UserPage';
import SubmitPage from '../Components/SubmitPage';
import Slika1 from '../slike/34190918.jpg';
import Slika2 from '../slike/download.png';
import Slika3 from '../slike/dtc.jpg';

const userData = [
    {
        id: 0,
        img:  Slika1,
        title: 'User 1',
        status: 'Aktivan',
        details: 'Detalji test test test test test test test test test test test test test test test test test ',
        url: 'Home',
        tab: 'todo Home',
        tabValue: 'todo',
        
    },
    {
      id: 1,
      img:  Slika2,
      title: 'User 2',
      status: 'Aktivan',
      details: 'Detalji test test test test test test test test test test test test test test test test test ',
      url: 'Users',
      tab: 'todo User',
      tabValue: <UserPage/>,
      
    },
    {
      id: 2,
      img:  Slika3,
      title: 'User 3',
      status: 'Aktivan',
      details: 'Detalji test test test test test test test test test test test test test test test test test ',
      title: 'User 3',
      url:'Projects',
      tab: 'todo Skills',
      tabValue: <SubmitPage/>,
    },
    {
      id: 3,
      img:  Slika1,
      title: 'User 4',
      status: 'Aktivan',
      details: 'Detalji test test test test test test test test test test test test test test test test test ',
      title: 'User 4',
      url:'Roles',
      tab: <RoleList/>,
      tabValue: <CreateRole/>,
      
    },
    
      
  ];
  
  export default userData;