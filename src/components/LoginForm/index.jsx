import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { StyledInput, StyledLink } from './style'
ExpendForm.propTypes = {};
ExpendForm.defaultProps = {};

function ExpendForm(props) {
  const { onFinishForm } = props;
  const [form] = Form.useForm();

  const onFinish = (value) => {
    if (onFinishForm) {
      onFinishForm(value);
      form.resetFields();
    }
  };

  return (
    <Form
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <StyledInput
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
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

export default ExpendForm;
