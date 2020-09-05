import todoReducer from "ReduxFolder/reducers/todo";
import { combineReducers } from "redux";
import vocabularyReducer from "ReduxFolder/reducers/vocabulary";

const rootReducer = combineReducers({
  todo: todoReducer,
  vocabulary: vocabularyReducer
});
export default rootReducer;
