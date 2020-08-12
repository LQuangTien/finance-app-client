import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import moment from "moment";
import LoginForm from "components/LoginForm";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory()
  const onFinishForm = async (value) => {
    const res = await axios.post(
      "https://skrj0.sse.codesandbox.io/auth/login",
      value
    );
    const { accessToken } = res.data;
    axios.defaults.headers.common["x-access-token"] = accessToken;
    localStorage.setItem("accessToken", accessToken);
    history.push('/earning')
  };
  const onLogOutClick = () => {
    axios.defaults.headers.common["x-access-token"] = "";
    localStorage.removeItem("accessToken");
  };
  return (
    <>
      <LoginForm onFinishForm={onFinishForm} />
      <Button onClick={onLogOutClick}>Log out</Button>
    </>
  );
}

export default LoginPage;
