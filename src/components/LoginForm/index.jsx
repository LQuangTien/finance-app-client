import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { StyledInput, StyledLink } from "./style";

function LoginForm(props) {
  const { onFinishForm } = props;

  const onFinish = (value) => {
    if (onFinishForm) {
      onFinishForm(value);
    }
  };

  return (
    <Form
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <StyledInput
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <StyledInput
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
        <StyledLink to="/register">Register</StyledLink>
      </Form.Item>
    </Form>
  );
}
LoginForm.propTypes = { onFinishForm: PropTypes.func };
LoginForm.defaultProps = { onFinishForm: null };
export default LoginForm;
