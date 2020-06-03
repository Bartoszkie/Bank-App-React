import React, { useState } from "react";

const UserFormAdd = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <input onChange={handleChange} name="email" type="text" />
      <input onChange={handleChange} name="adress" type="text" />
      <input onChange={handleChange} name="syf" type="text" />
      <button className="user-form__submit">Dodaj</button>
    </form>
  );
};

export default UserFormAdd;
