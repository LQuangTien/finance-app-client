import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Button, DatePicker, Form, Input, Select } from "antd";

const { Option } = Select;

const CATEGORIES = [
  "Ultilities",
  "Food",
  "Departmental",
  "Entertaiment",
  "Car",
  "Medical",
  "Misc"
];

function SpendingForm(props) {
  const {
    categoryInput,
    typeInput,
    types,
    categoryOnChange,
    typeOnChange,
    onFinishForm
  } = props;
  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  const onFinish = (value) => {
    if (onFinishForm) {
      onFinishForm(value);
      form.resetFields();
    }
  };
  const handleCategoryOnChange = (value) => {
    if (categoryOnChange) {
      categoryOnChange(value);
    }
  };
  const handleTypeOnChange = (value) => {
    if (typeOnChange) {
      typeOnChange(value);
    }
  };

  useEffect(() => {
    setFieldsValue({ type: types[0] });
  }, [types, categoryInput, setFieldsValue]);

  return (
    <Form
      onFinish={onFinish}
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
    >
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please input your category!" }]}
      >
        <Select
          style={{ width: "100%" }}
          value={categoryInput}
          onChange={handleCategoryOnChange}
        >
          {CATEGORIES.map((category) => (
            <Option value={category}>{category}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: "Please input your type!" }]}
      >
        <Select
          style={{ width: "100%" }}
          onChange={handleTypeOnChange}
          value={typeInput}
        >
          {types && types.map((type) => <Option value={type}>{type}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: "Please input your money!" }]}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Please input your date!" }]}
      >
        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
      </Form.Item>

      <Button type="primary" htmlType="submit" block style={{ background: "#52c41a", borderColor: "#52c41a" }}>
        Submit your reasonable spending
      </Button>
    </Form>
  );
}
SpendingForm.propTypes = {
  categoryInput: PropTypes.string,
  typeInput: PropTypes.string,
  types: PropTypes.shape([]),
  categoryOnChange: PropTypes.func,
  typeOnChange: PropTypes.func,
  onFinishForm: PropTypes.func
};
SpendingForm.defaultProps = {
  categoryInput: "",
  typeInput: "",
  types: [],
  categoryOnChange: null,
  typeOnChange: null,
  onFinishForm: null
};
export default SpendingForm;
