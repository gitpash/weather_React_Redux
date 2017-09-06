import { handleActions } from "redux-actions";
import { addCity } from "../actions/addCity";

const initialState = {
  data: []
};

export default handleActions(
  {
    [addCity]: (state, action) => ({
      ...state,
      data: [...state.data, action.payload]
    })
  },
  initialState
);
