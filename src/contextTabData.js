import React from 'react';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import BasicInformationCard from './BasicInformationCard';

const contextTabData = [
    {
        id: 0,
        icon:  <PermIdentityOutlinedIcon />,
        title: 'Basic Information',
        
        tab: <BasicInformationCard/>,
        
        
    },
    {
      id: 1,
      icon: <VpnKeyOutlinedIcon />,
      title: 'Password Management',
      
      tab: 'todo Password Management',
      
    },
    {
      id: 2,
      icon:  <LockOpenOutlinedIcon />,
      title: 'Authorization',
      tab: 'todo Authorization'
    },
    
      
  ];
  
  export default contextTabData;