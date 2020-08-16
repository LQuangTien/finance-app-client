import axios from "axios";
import { notification } from "antd";

axios.interceptors.response.use(
  (res) => {
    if (res.status === 202) {
      notification.success({ message: res.data.msg });
    }
    if (res.status === 201) {
      notification.success({ message: "Have a nice day" });
    }
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      axios.defaults.headers.common["x-access-token"] = "";
      localStorage.removeItem("accessToken");
      window.location.replace("/login");
    }
    if (error.response.status === 403) {
      notification.error({ message: error.response.data.msg });
    }
  }
);
export const getData = async (page) => {
  const res = await axios.get(`https://skrj0.sse.codesandbox.io/${page}`);
  const data = res.data[page];
  return data;
};
export const postEarningData = async (newTransaction) => {
  const res = await axios.post("https://skrj0.sse.codesandbox.io/earning", newTransaction);
  return res;
};
export const postSpendingData = async (value) => {
  const res = await axios.post("https://skrj0.sse.codesandbox.io/spending", value);
  return res;
};
export const postLogin = async (value) => {
  const res = axios.post("https://skrj0.sse.codesandbox.io/auth/login", value);
  return res;
};
export const postRegister = async (value) => {
  const res = axios.post("https://skrj0.sse.codesandbox.io/auth/register", value);
  return res;
};
const getSummary = (accumulator, currentValue) => accumulator + currentValue;
const getMoney = (total, currentYear) => {
  total += currentYear.months.reduce(getSummary);
  return total;
};
export const getWallet = async () => {
  const earning = await getData("earning");
  const moneyInEarning = earning.totalMoneyEachYear.reduce(getMoney, 0);
  const spending = await getData("spending");
  const moneyInSpending = spending.totalMoneyEachYear.reduce(getMoney, 0);
  const result = moneyInEarning - moneyInSpending;
  return result;
};
