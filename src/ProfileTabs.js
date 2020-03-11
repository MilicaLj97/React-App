import React from 'react';
import { TabContext } from './useContext';

export default function VerticalTabs() {

  const {tab} = React.useContext(TabContext);
  
  
  return (
    <div>
      
      {tab}
    </div>
  );
}
