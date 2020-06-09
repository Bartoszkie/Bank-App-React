import axios from "axios";
import { env } from "./env.variables";

const instance = axios.create({
  baseURL: env.apiURL,
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access__details");
    if (token) {
      config.headers["Authorization"] = "Basic " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    // if (error && error.response && error.response.data) {
    //   const messages = error.response.data.message;
    // }
    return Promise.reject(error.response && error.response.data);
  }
);

export default instance;
