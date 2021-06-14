import axios from "axios";
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, AUTH_USER } from "./types";

export function loginUser(dataToSubmit) {
  //dataToSubmit -> body, request -> data from backend user
  const request = axios.post("/api/users/login", dataToSubmit).then((res) => {
    return res.data;
  });

  return {
    type: LOGIN_USER,
    //response : request
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  //dataToSubmit -> body, request -> data from backend user
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((res) => {
      return res.data;
    });

  return {
    type: REGISTER_USER,
    //response : request
    payload: request,
  };
}

export function logoutUser() {
  const request = axios.get("/api/users/logout").then((res) => {
    return res.data;
  });

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get("/api/users/auth").then((res) => res.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}
