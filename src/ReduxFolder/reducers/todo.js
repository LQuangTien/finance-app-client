const initialState = { items: [], isLoading: true, isAdding: false };
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO": {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        isAdding: false
      };
    }
    case "ADD_TODO": {
      return { ...state, isAdding: true };
    }
    case "DELETE_TODO": {
      return { ...state, isLoading: true };
    }
    case "EDIT_TODO": {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default todoReducer;
