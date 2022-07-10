import React, { useContext } from "react";
import { Button, Container, Ul } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

const Navbar = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useContext(UserContext);

  return (
    <Container>
      <Ul>
        <Ul.Li to="/library">Library</Ul.Li>
        <Ul.Li to="/tutorial">Tutorial</Ul.Li>
      </Ul>
      {info?.token ? (
        <Button onClick={() => navigate("/user")}>
          {info?.user?.fullName}
        </Button>
      ) : (
        <Button onClick={() => navigate("/login")}>Login</Button>
      )}
    </Container>
  );
};

export default Navbar;
