import React, { createContext, useState } from 'react';

export const UserContext =createContext();
const Context = ({children}) => {
  const [info,setInfo]=useState({
    token:null,
    user:{}
  });

  return (
    <UserContext.Provider value={[info,setInfo]}>
      {children}
    </UserContext.Provider>
  );
};

export default Context;