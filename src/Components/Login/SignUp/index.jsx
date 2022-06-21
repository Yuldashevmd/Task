import React, { useState } from 'react';
import { BackBtn, Button, CheckBox, Container, FormBlock, Input } from '../style';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const navigate =useNavigate();
  const [login,setLogin]=useState();
  const [password,setPassword]=useState();

  const onSubmit=()=>{
    fetch('https://coursesnodejs.herokuapp.com/user/sign-up',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
       login,
       password
      }),
    })
    .then(res=>res.json())
    .then(res=>res?.statusCode === 200 && navigate('/login'))
  };

  return (
    <Container>
    <FormBlock>
      <BackBtn onClick={()=>navigate('/')}>{'<'}</BackBtn>
    <FormBlock.Form htmlFor='post'>
      <h2>Sign Up</h2>
      <Input onChange={({target:{value}})=>setLogin(value)} type='text' placeholder='Login'/>
      <Input onChange={({target:{value}})=>setPassword(value)} type='password' placeholder='Password'/>
      <CheckBox>
      <Input type='checkbox' name='checkbox'/>
      <label htmlFor='checkbox'>Remember me</label>
      </CheckBox>
      <Button onClick={onSubmit}>Sign Up</Button>
    </FormBlock.Form>
   </FormBlock>
    <Container.Button onClick={()=>navigate('/login')}>Sign In</Container.Button>
    </Container>
  );
};

export default SignUp;