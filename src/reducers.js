import { combineReducers } from "redux";

import addReducer from "./reducers/addReducer";

const appReducer = combineReducers({
  addReducer
});

export default (state, action) => appReducer(state, action);