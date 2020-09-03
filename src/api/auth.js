import axios from "../config/axios";

export const postLogin = async (value) => {
  const res = axios.post("https://finance-app-lqt.herokuapp.com/auth/login", value);
  return res;
};
export const postRegister = async (value) => {
  const res = axios.post("https://finance-app-lqt.herokuapp.com/auth/register", value);
  return res;
};
