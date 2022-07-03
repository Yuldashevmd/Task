import React, { useContext, useState } from "react";
import {
  BackBtn,
  Button,
  CheckBox,
  Container,
  ForgotPass,
  FormBlock,
  Input,
} from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [info, setInfo] = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://coursesnodejs.herokuapp.com/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.statusCode === 200) {
          setInfo({
            ...info,
            token: res?.data?.token,
            user: res?.data?.user,
          });
          navigate("/library");
        } else {
          alert("Password is wrong!...");
        }
      });
  };

  return (
    <Container>
      <FormBlock>
        <BackBtn onClick={() => navigate("/")}>{"<"}</BackBtn>
        <FormBlock.Form htmlFor="post">
          <h2>Sign In</h2>
          <Input
            onChange={({ target: { value } }) => setPassword(value)}
            type="text"
            placeholder="Password"
          />
          <CheckBox>
            <Input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </CheckBox>
          <Button onClick={onSubmit}>Sign In</Button>
          <ForgotPass>Forgot password ?</ForgotPass>
        </FormBlock.Form>
      </FormBlock>
      <Container.Button onClick={() => navigate("/signup")}>
        Sign Up
      </Container.Button>
    </Container>
  );
};

export default Login;
