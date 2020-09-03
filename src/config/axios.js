import axios from "axios";
import { notification } from "antd";

axios.interceptors.response.use(
  (res) => {
    if (res.status === 202) {
      notification.success({ message: res.data.message, placement: "topLeft" });
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
      notification.error({ message: error.response.data.message, placement: "topLeft" });
    }
  }
);

export default axios;
