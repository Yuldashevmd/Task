import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Generic from '../Components/Generic';
import Login from '../Components/Login';
import SignUp from '../Components/Login/SignUp';


const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/library'/>}/>
        <Route path='/library' element={<Generic/>}/>
        <Route path='/tutorial' element={<Generic/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;