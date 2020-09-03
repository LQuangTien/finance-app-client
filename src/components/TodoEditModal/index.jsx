import { Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

function TodoEditModal(props) {
  const { todoData, onCloseEdit, onSubmitEdit } = props;
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(todoData.content);
  }, [todoData.content]);

  const handleCancel = () => {
    onCloseEdit();
  };
  const handleOk = () => {
    const { id } = todoData;
    onSubmitEdit(id, value);
  };
  const handleInputOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Modal
        title="Edit Todo"
        visible={todoData.isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={value}
          onChange={handleInputOnChange}
        />
      </Modal>

    </div>
  );
}
TodoEditModal.propTypes = {
  todoData: PropTypes.shape(),
  onCloseEdit: PropTypes.func,
  onSubmitEdit: PropTypes.func
};
TodoEditModal.defaultProps = {
  todoData: null,
  onSubmitEdit: null,
  onCloseEdit: null

};
export default TodoEditModal;
