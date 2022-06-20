import React from 'react';
import { Button, Container, Ul } from './style';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate =useNavigate();
  return (
    <Container>
      <Ul>
        <Ul.Li to='/library'>Library</Ul.Li>
        <Ul.Li to='/tutorial'>Tutorial</Ul.Li>
      </Ul>
      <Button onClick={()=>navigate('/login')}>Login</Button>
    </Container>
  );
};

export default Navbar;