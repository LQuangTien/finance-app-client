import axios from "../config/axios";

export const getData = async (page) => {
  const res = await axios.get(`https://finance-app-lqt.herokuapp.com/${page}`);
  const data = res.data[page];
  return data;
};
export const postEarningData = async (newTransaction) => {
  const res = await axios.post("https://finance-app-lqt.herokuapp.com/earning", newTransaction);
  return res;
};
export const postSpendingData = async (value) => {
  const res = await axios.post("https://finance-app-lqt.herokuapp.com/spending", value);
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
