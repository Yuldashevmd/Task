import React, { createContext, useState } from 'react';

const Context = ({children}) => {
  const Context =createContext();
  const [data,setData] =useState();
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export default Context;