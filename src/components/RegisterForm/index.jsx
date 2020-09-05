import React from "react";
import { Button, Form, Input } from "antd";
import PropTypes from "prop-types";
import StyledLink from "./style";

function RegisterForm(props) {
  const { onFinishForm } = props;

  const onFinish = (value) => {
    if (onFinishForm) {
      onFinishForm(value);
    }
  };

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Username"
        rules={[
          {
            required: true,
            message: "Please input your Username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!"
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <StyledLink to="/login">
          Sign in
        </StyledLink>
      </Form.Item>
    </Form>
  );
}

RegisterForm.propTypes = { onFinishForm: PropTypes.func };
RegisterForm.defaultProps = { onFinishForm: null };
export default RegisterForm;
