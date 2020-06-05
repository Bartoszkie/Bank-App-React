import React, { useState } from "react";
import axios from "axios";

const UserFormAdd = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get("/users/login", {
        headers: {
          Authorization: "Basic " + btoa("user" + ":" + "12345"),
        },
      })
      .then(() => {
        axios
          .post("/users", data)
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(data);

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} name="username" type="text" />
      <input onChange={handleChange} name="password" type="text" />
      <button className="user-form__submit">Dodaj</button>
    </form>
  );
};

export default UserFormAdd;
