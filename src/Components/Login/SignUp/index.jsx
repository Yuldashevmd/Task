import React, { useState } from "react";
import {
  BackBtn,
  Button,
  CheckBox,
  Container,
  FormBlock,
  Input,
} from "../style";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://coursesnodejs.herokuapp.com/user/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "userInfo",
        fullName: userData.login,
        password: userData.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => res?.statusCode === 200 && navigate("/login"));
  };

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <FormBlock>
        <BackBtn onClick={() => navigate("/")}>{"<"}</BackBtn>
        <FormBlock.Form>
          <h2>Sign Up</h2>
          <Input
            onChange={onChange}
            type="text"
            placeholder="Login"
            name="login"
          />
          <Input
            onChange={onChange}
            type="password"
            placeholder="Password"
            name="password"
          />
          <CheckBox>
            <Input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </CheckBox>
          <Button onClick={onSubmit}>Sign Up</Button>
        </FormBlock.Form>
      </FormBlock>
      <Container.Button onClick={() => navigate("/login")}>
        Sign In
      </Container.Button>
    </Container>
  );
};

export default SignUp;
