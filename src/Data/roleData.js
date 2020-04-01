import React from 'react';
import RoleList from '../Components/RoleCard';
import CreateRole from '../Components/CreateRole';
import UserPage from '../Components/UserPage';
import SubmitPage from '../Components/SubmitPage';
import Slika from '../slike/dtc.jpg';

const roleData = [
    {
        id: 0,
        img:  Slika,
        title: 'Role 1',
        AvailabilityFrom: '20.03.2020.',
        AvailabilityTo: '21.07.2020.',
        details: 'Detalji test test test test test test test test test test test test test test test test test ',
        url: '',
        tab: 'todo ',
        tabValue: 'todo',
        
    },
    {
      id: 1,
      img:  Slika,
      title: 'Role 2',
      AvailabilityFrom: '20.03.2020.',
      AvailabilityTo: '21.07.2020.',
      details: 'Detalji test test test test test test test test test test test test test test test test test ',
      url: '',
      tab: 'todo',
      tabValue: 'todo',
      
    },
    {
      id: 2,
      img:  Slika,
      title: 'Role 3',
      AvailabilityFrom: '20.03.2020.',
      AvailabilityTo: '21.07.2020.',
      details: 'Detalji test test test test test test test test test test test test test test test test test ',
      url:'',
      tab: 'todo ',
      tabValue: 'todo',
    },
    {
      id: 3,
      img:  Slika,
      title: 'Role 4',
      AvailabilityFrom: '20.03.2020.',
      AvailabilityTo: '21.07.2020.',
      details: 'Detalji test test test test test test test test test test test test test test test test test ',
      url:'',
      tab: 'todo',
      tabValue: 'todo',
      
    },
    
      
  ];
  
  export default roleData;

