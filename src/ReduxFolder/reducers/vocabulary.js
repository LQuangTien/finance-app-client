const initialState = { vocabylaries: [], isLoading: true, isAdding: false };
const vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_VOCABULARY": {
      return {
        ...state,
        vocabularies: action.payload,
        isLoading: false,
        isAdding: false
      };
    }
    case "ADD_VOCABULARY": {
      return { ...state, isAdding: true };
    }
    case "DELETE_VOCABULARY": {
      return { ...state, isLoading: true };
    }
    case "EDIT_VOCABULARY": {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default vocabularyReducer;
