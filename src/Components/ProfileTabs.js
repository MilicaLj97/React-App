import React from 'react';
import { TabContext } from '../Helpers/tabContext';

export default function VerticalTabs() {

  const {tab} = React.useContext(TabContext);
  
  
  return (
    <div>
      
      {tab}
    </div>
  );
}
