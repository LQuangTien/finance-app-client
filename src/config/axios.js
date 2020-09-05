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
    const { status, data } = error.response;
    if (status === 401) {
      axios.defaults.headers.common["x-access-token"] = "";
      localStorage.removeItem("accessToken");
      window.location.replace("/login");
    }
    if (status === 403) {
      notification.error({ message: data.error.message, placement: "topLeft" });
    }
  }
);

export default axios;
