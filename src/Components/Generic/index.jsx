import React from 'react';
import {useLocation} from 'react-router-dom';
import Navbar from '../Navbar';


const Generic = () => {
  const locate =useLocation();
  return (
    <div>
       <Navbar/>
      <h1>{locate.pathname} on proccess...</h1>
    </div>
  );
};

export default Generic;