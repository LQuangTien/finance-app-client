import axios from "../config/axios";

export const getVocabulary = async () => {
  const res = await axios.get("https://finance-app-lqt.herokuapp.com/vocabulary");
  const { vocabularies } = res.data;
  return vocabularies;
};
export const addVocabulary = async (value) => {
  const res = await axios.post("https://finance-app-lqt.herokuapp.com/vocabulary", value);
  return res;
};
export const deleteVocabulary = async (id) => {
  const res = await axios.delete(`https://finance-app-lqt.herokuapp.com/vocabulary/${id}`);
  return res;
};
export const editVocabulary = async (id, value) => {
  const res = await axios.patch("https://finance-app-lqt.herokuapp.com/vocabulary/", { _id: id, ...value });
  return res;
};
