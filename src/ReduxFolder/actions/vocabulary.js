import { getVocabulary, addVocabulary, deleteVocabulary, editVocabulary } from "api/vocabulary";

export const GetVocabulary = () => async (dispatch) => {
  try {
    const vocabularies = await getVocabulary();
    vocabularies.map((word) => {
      word.key = word._id;
      return word;
    });
    dispatch({ type: "GET_VOCABULARY", payload: vocabularies });
  } catch (error) {
    dispatch({ type: "GET_VOCABULARY", payload: [] });
  }
};

export const AddVocabulary = (value) => async (dispatch) => {
  try {
    await addVocabulary(value);
    dispatch({ type: "ADD_VOCABULARY" });
  } catch (error) {
    console.log(error);
  }
};
export const DeleteVocabulary = (id) => async (dispatch) => {
  try {
    await deleteVocabulary(id);
    dispatch({ type: "DELETE_VOCABULARY" });
  } catch (error) {
    console.log(error);
  }
};
export const EditVocabulary = (id, value) => async (dispatch) => {
  try {
    await editVocabulary(id, value);
    dispatch({ type: "DELETE_VOCABULARY" });
  } catch (error) {
    console.log(error);
  }
};
