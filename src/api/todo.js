import axios from "../config/axios";

export const getTodo = async () => {
  const res = await axios.get("https://finance-app-lqt.herokuapp.com/todo");
  const { todos } = res.data;
  return todos;
};
export const addTodo = async (text) => {
  const res = await axios.post("https://finance-app-lqt.herokuapp.com/todo", { content: text });
  return res;
};
export const deleteTodo = async (id) => {
  const res = await axios.delete(`https://finance-app-lqt.herokuapp.com/todo/${id}`);
  return res;
};
export const editTodo = async (id, newContent) => {
  const res = await axios.patch("https://finance-app-lqt.herokuapp.com/todo/", { _id: id, content: newContent });
  return res;
};
