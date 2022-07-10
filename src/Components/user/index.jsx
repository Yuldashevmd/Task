import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context";
import Navbar from "../Navbar";

const User = () => {
  const [info] = useContext(UserContext);
  const [course, setCourse] = useState();
  useEffect(() => {
    fetch("https://westco1.herokuapp.com/user/coursesUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${info?.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setCourse(res?.message));
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <h1>{course}</h1>
      </div>
    </>
  );
};

export default User;
