import React, { useState } from "react";
import RoleData from '../Data/roleData';

export default function TodoList() {
  const defaultList = RoleData;

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
   const Name = e.target.getAttribute("Name")
    updateList(list.filter(item => item.Name !== Name));
  };

  return (
    <div>
      {list.map(item => {
        return (
          <>
            <span Name={item.Name} onClick={handleRemoveItem}>
              x
            </span>
            <span>{item.Name}</span>
          </>
        );
      })}
    </div>
  );
};