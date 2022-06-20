import React from 'react';
import { BackBtn, Button, CheckBox, Container, FormBlock, Input } from '../style';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const navigate =useNavigate();
  return (
    <Container>
    <FormBlock>
      <BackBtn onClick={()=>navigate('/')}>{'<'}</BackBtn>
    <FormBlock.Form htmlFor='post'>
      <h2>Sign Up</h2>
      <Input type='text' placeholder='Login'/>
      <Input type='text' placeholder='Password'/>
      <CheckBox>
      <Input type='checkbox' name='checkbox'/>
      <label htmlFor='checkbox'>Remember me</label>
      </CheckBox>
      <Button>Sign Up</Button>
    </FormBlock.Form>
   </FormBlock>
    <Container.Button onClick={()=>navigate('/login')}>Sign In</Container.Button>
    </Container>
  );
};

export default SignUp;