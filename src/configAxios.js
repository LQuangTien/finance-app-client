import axios from "axios";
axios.interceptors.response.use(
  (res) => {
    console.log("rés", res);
    return res;
  },
  (error) => {
    console.log("err", error.response);
  }
);
exports.getData = async () => {
  const res = await axios.get("https://skrj0.sse.codesandbox.io/income");
  const { income } = res.data;
  console.log(income);
  return income;
};
