import { Col, Space } from "antd";
import RegisterForm from "components/RegisterForm";
import { postRegister } from "pages/configAxios";
import React from "react";
import { useHistory } from "react-router-dom";
import { FormWrapper, StyledImg, StyledRow, StyledTitle, Wrapper } from "./style";

function RegisterPage() {
  const history = useHistory();
  const onFinishForm = async (value) => {
    const res = await postRegister(value);
    if (!res) return;
    history.push("/login");
  };

  return (

    <StyledRow>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Wrapper>
          <Space direction="vertical">
            <StyledTitle type="left">Try your best</StyledTitle>
            <StyledTitle type="center">to manage</StyledTitle>
            <StyledTitle type="right">finances ...</StyledTitle>
          </Space>
          <FormWrapper>

            <RegisterForm onFinishForm={onFinishForm} />
          </FormWrapper>
        </Wrapper>
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{ background: "white" }}>
        <StyledImg
          src="https://res.cloudinary.com/quangtien/image/upload/v1597393032/undraw_stand_out_1oag_vfkjcv.svg"
        />
      </Col>
    </StyledRow>

  );
}

export default RegisterPage;
