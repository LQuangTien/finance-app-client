import axios from "axios";

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      axios.defaults.headers.common['x-access-token'] = '';
      localStorage.removeItem('accessToken');
      window.location.replace("/login");
    }
  }
);
export const getData = async (page) => {
  const res = await axios.get(`https://skrj0.sse.codesandbox.io/${page}`);
  const data = res.data[page];
  return data;
};
export const postEarningData = newTransaction => {
  axios.post("https://skrj0.sse.codesandbox.io/earning", newTransaction);
}
export const postSpendingData = value => {
  axios.post("https://skrj0.sse.codesandbox.io/expend", value);
}