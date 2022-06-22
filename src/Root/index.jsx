import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Generic from '../Components/Generic';
import Library from '../Components/Library';
import Content from '../Components/Library/Content';
import Login from '../Components/Login';
import SignUp from '../Components/Login/SignUp';


const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/library'/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/library:id' element={<Content/>}/>
        <Route path='/tutorial' element={<Generic/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;