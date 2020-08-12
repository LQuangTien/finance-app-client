import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Button, Form, Input } from "antd";

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
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password style={{ width: "100%" }} />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Sign in & Let's spend reasonable
      </Button>
    </Form>
  );
}

export default ExpendForm;
