import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "ReduxFolder/store";
import App from "./App";

axios.defaults.headers.common["x-access-token"] = localStorage.getItem(
  "accessToken"
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
