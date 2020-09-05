import { Button, Form, Input, List, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import TodoEditModal from "components/TodoEditModal";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { FlexWrapper, ListWrapper, Wrapper } from "./style";

function TodoApp(props) {
  const {
    todos,
    onAddTodo,
    onDeleteTodo,
    onEditTodo,
    isLoading,
    isAdding
  } = props;
  const [todoData, setTodoData] = useState({
    isVisible: false,
    id: null,
    content: null
  });
  const [form] = useForm();
  const handleOnFinish = ({ text }) => {
    if (onAddTodo) {
      onAddTodo(text);
      form.resetFields();
    }
  };
  const handleDeleteTodo = (id) => {
    if (onDeleteTodo) {
      onDeleteTodo(id);
    }
  };
  const onOpenEdit = (id, content) => {
    setTodoData({
      ...todoData,
      isVisible: true,
      id,
      content
    });
  };
  const onCloseEdit = () => {
    setTodoData({
      ...todoData,
      isVisible: false
    });
  };
  const onSubmitEdit = (id, newContent) => {
    if (!onEditTodo) return;

    setTodoData({
      ...todoData,
      isVisible: false
    });
    onEditTodo(id, newContent);
  };
  return (
    <FlexWrapper>
      <Wrapper>
        <Form onFinish={handleOnFinish} layout="inline" form={form}>
          <Form.Item name="text" style={{ width: "80%" }}>
            <Input
              placeholder="Add todo"
              required
            />
          </Form.Item>
          <Form.Item>
            <Button
              icon={isAdding && <Spin size="small" />}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Scrollbars>
          <ListWrapper>
            <List
              loading={isLoading}
              itemLayout="horizontal"
              dataSource={todos}
              renderItem={(item) => (
                <List.Item
                  style={{ "word-break": "break-all" }}
                  key={item._id}
                  actions={[
                    <Button
                      onClick={() => onOpenEdit(item._id, item.content)}
                    >
                      Edit
                    </Button>,
                    <Button
                      onClick={() => handleDeleteTodo(item._id)}
                      danger
                    >
                      Delete
                    </Button>
                  ]}
                >
                  {item.content}
                </List.Item>
              )}
            />
          </ListWrapper>
        </Scrollbars>

        <TodoEditModal
          todoData={todoData}
          onCloseEdit={onCloseEdit}
          onSubmitEdit={onSubmitEdit}
        />
      </Wrapper>
    </FlexWrapper>
  );
}
TodoApp.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})),
  onAddTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  isLoading: PropTypes.bool,
  isAdding: PropTypes.bool
};
TodoApp.defaultProps = {
  todos: [],
  onAddTodo: null,
  onDeleteTodo: null,
  onEditTodo: null,
  isLoading: null,
  isAdding: null

};
export default TodoApp;
