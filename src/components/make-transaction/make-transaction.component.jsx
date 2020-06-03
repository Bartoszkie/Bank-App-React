import React, { useEffect, useState } from "react";

import axios from "axios";

const MakeTransaction = ({ wypłata }) => {
  const [data, setData] = useState({});
  const [getData, setGetData] = useState({});

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

    if (wypłata) {
      axios
        .put("/users", data)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    axios
      .get("/users")
      .then((data) => setGetData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input onChange={handleChange} name="value" type="number" />
      <button className="user-form__submit">Wykonaj</button>
    </form>
  );
};

export default MakeTransaction;
