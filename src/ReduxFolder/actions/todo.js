import { getTodo, addTodo, deleteTodo, editTodo } from "api/todo";

export const GetTodo = () => async (dispatch) => {
  try {
    const todos = await getTodo();
    dispatch({ type: "GET_TODO", payload: todos });
  } catch (error) {
    dispatch({ type: "GET_TODO", payload: [] });
  }
};

export const AddTodo = (text) => async (dispatch) => {
  try {
    await addTodo(text);
    dispatch({ type: "ADD_TODO" });
  } catch (error) {
    console.log(error);
  }
};
export const DeleteTodo = (id) => async (dispatch) => {
  try {
    await deleteTodo(id);
    dispatch({ type: "DELETE_TODO" });
  } catch (error) {
    console.log(error);
  }
};
export const EditTodo = (id, newContent) => async (dispatch) => {
  try {
    await editTodo(id, newContent);
    dispatch({ type: "DELETE_TODO" });
  } catch (error) {
    console.log(error);
  }
};
