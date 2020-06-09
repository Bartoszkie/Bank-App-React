import {
  PostLoginStart,
  PostLoginSuccess,
  PostLoginError,
} from "./login.actions";
import { axios } from "../../../axiosConfig";
import { useHistory } from "react-router-dom";

const history = useHistory();

export function userLoginAction(login, password) {
  return async (dispatch) => {
    try {
      dispatch(PostLoginStart());
      axios
        .get("/users/login", {
          headers: {
            Authorization: "Basic " + btoa(login + ":" + password),
          },
        })
        .then((data) => {
          history.push("/login/users");
          PostLoginSuccess(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      dispatch(PostLoginError(error));
    }
  };
}
