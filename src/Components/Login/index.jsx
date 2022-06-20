import React from 'react';
import { BackBtn, Button, CheckBox, Container, ForgotPass, FormBlock, Input } from './style';
import {useNavigate} from 'react-router-dom';

const Login = () => {
 const navigate =useNavigate();
  return (
    <Container>
     <FormBlock>
     <BackBtn onClick={()=>navigate('/')}>{'<'}</BackBtn>
      <FormBlock.Form htmlFor='post'>
        <h2>Sign In</h2>
        <Input type='text' placeholder='Login'/>
        <Input type='text' placeholder='Password'/>
        <CheckBox>
        <Input type='checkbox' name='checkbox'/>
        <label htmlFor='checkbox'>Remember me</label>
        </CheckBox>
        <Button>Sign In</Button>
      <ForgotPass>Forgot password ?</ForgotPass>
      </FormBlock.Form>
     </FormBlock>
     <Container.Button onClick={()=>navigate('/signup')}>Sign Up</Container.Button>
    </Container>
  );
};

export default Login;