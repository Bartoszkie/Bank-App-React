import { setUsersFromBackend } from "./users.actions";
import axios from "axios";

export const getUsersFromBackend = (dispatch) => {
  axios
    .get("/users/login", {
      headers: {
        Authorization: "Basic " + btoa("user" + ":" + "12345"),
      },
    })
    .then(() => {
      axios
        .get("/users")
        .then((data) => dispatch(setUsersFromBackend(data)))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};
