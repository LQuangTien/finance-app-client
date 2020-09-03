import { Col, Space } from "antd";
import axios from "axios";
import LoginForm from "components/LoginForm";
import { postLogin } from "api/auth";
import React from "react";
import { useHistory } from "react-router-dom";
import { StyledImg, StyledRow, StyledTitle, Wrapper } from "./style";

function LoginPage() {
  const history = useHistory();
  const onFinishForm = async (value) => {
    const res = await postLogin(value);
    if (!res) return;
    const { accessToken } = res.data;
    axios.defaults.headers.common["x-access-token"] = accessToken;
    localStorage.setItem("accessToken", accessToken);
    history.push("/earning");
  };

  return (

    <StyledRow>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Wrapper>
          <Space direction="vertical">
            <StyledTitle type="left">
              Welcome to
            </StyledTitle>
            <StyledTitle type="right">
              Personal Finance
            </StyledTitle>
          </Space>
          <LoginForm onFinishForm={onFinishForm} />
        </Wrapper>
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ background: "white" }}>
        <StyledImg
          src="https://res.cloudinary.com/quangtien/image/upload/v1597304628/undraw_finance_0bdk_gwuw4j.svg"
        />
      </Col>
    </StyledRow>

  );
}

export default LoginPage;
