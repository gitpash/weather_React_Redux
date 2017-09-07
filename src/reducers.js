import { combineReducers } from "redux";
import reducer from "./reducers/reducer";

const appReducer = combineReducers({
  reducer
});

export default (state, action) => appReducer(state, action);
