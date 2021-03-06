import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { basicUrl } from "../basicUrl";
import Navbar from "../Navbar";
import { Book, Books, Category, Container } from "./style";
import { UserContext } from "../Context";

const Library = () => {
  const [dataCon, setData] = useState();
  const [info] = useContext(UserContext);

  useEffect(() => {
    fetch(`${basicUrl}/user/category?page=1&limit=5`)
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, []);

  const navigate = useNavigate();

  const addCourse = ({ _id, name }) => {
    fetch("https://westco1.herokuapp.com/user/coursesUser", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${info?.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        courseId: _id,
        course: name,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <Container>
      <Navbar />
      <h1>Category</h1>
      {dataCon?.data.map((item) => (
        <Category key={item?._id}>
          <h1>{item?.name}</h1>
          <Books>
            {item?.books.map((value) => (
              <Book key={value?._id}>
                <img src={`${basicUrl}/${value?.imgUrl}`} alt="img" />
                <button
                  onClick={() =>
                    navigate(info?.token ? `/library:${value._id}` : "/login")
                  }
                >
                  {value?.name}
                </button>
                <button onClick={() => addCourse(value)}>Add to course</button>
              </Book>
            ))}
          </Books>
        </Category>
      ))}
    </Container>
  );
};

export default Library;
