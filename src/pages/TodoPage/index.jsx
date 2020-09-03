import React, { useEffect } from "react";
import TodoApp from "components/TodoApp";
import { useSelector, useDispatch } from "react-redux";
import { GetTodo, AddTodo, DeleteTodo, EditTodo } from "ReduxFolder/actions/todo";

function TodoPage() {
  const todos = useSelector((state) => state.todo.items);
  const { isLoading, isAdding } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTodo());
  }, [dispatch, isAdding, isLoading]);
  const onAddTodo = (text) => {
    dispatch(AddTodo(text));
  };
  const onDeleteTodo = (id) => {
    dispatch(DeleteTodo(id));
  };
  const onEditTodo = (id, content) => {
    dispatch(EditTodo(id, content));
  };
  return (
    <TodoApp
      isLoading={isLoading}
      isAdding={isAdding}
      todos={todos}
      onAddTodo={onAddTodo}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
    />
  );
}

export default TodoPage;
