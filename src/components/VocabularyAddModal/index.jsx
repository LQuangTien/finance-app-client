import { Form, Input, Modal, Select } from "antd";
import React from "react";
import PropTypes from "prop-types";

function VocabularyAddModal(props) {
  const { isVisible, onCloseSubmit, onSubmitVocabulary, types } = props;
  const [form] = Form.useForm();

  const handleCancel = () => {
    onCloseSubmit();
  };
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onSubmitVocabulary(values);
        onCloseSubmit();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Edit Todo"
      visible={isVisible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Form form={form}>
        <Form.Item
          name="vocabulary"
          label="Vocabulary"
          rules={[
            { required: true }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            { required: true }
          ]}
        >
          <Select>
            {
            types.map((type) => (
              <Select.Option value={type}>
                {type[0].toUpperCase() + type.slice(1)}
              </Select.Option>
            ))
           }
          </Select>
        </Form.Item>
        <Form.Item
          name="meaning"
          label="Meaning"
          rules={[
            { required: true }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
VocabularyAddModal.propTypes = {
  onCloseSubmit: PropTypes.func,
  onSubmitVocabulary: PropTypes.func,
  isVisible: PropTypes.bool,
  types: PropTypes.shape()
};
VocabularyAddModal.defaultProps = {
  onCloseSubmit: null,
  onSubmitVocabulary: null,
  isVisible: false,
  types: []
};
export default VocabularyAddModal;
