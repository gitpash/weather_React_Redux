import { handleActions } from "redux-actions";
import { weatherReceived, weatherReceiveFail } from "../actions/addCity";
import { deleteCity } from "../actions/deleteCity";
import { currentWeather, currentWeatherFail } from "../actions/getWeather";

const initialState = {
  data: [],
  localData: {},
  fetchError: false,
  localFail: false
};

export default handleActions(
  {
    [deleteCity]: (state, action) => ({
      ...state,
      data: state.data.filter((element, i) => i !== action.payload),
      fetchError: false
    }),
    [weatherReceived]: (state, action) => ({
      ...state,
      data: [
        ...state.data,
        { name: action.payload.name, temp: action.payload.main.temp }
      ], fetchError: false
    }),
    [weatherReceiveFail]: (state) => ({
      ...state, fetchError: true
    }),
    [currentWeather]: (state, action) => ({
      ...state,
      localData: { name: action.payload.name, temp: action.payload.main.temp },
      localFail: false
    }),
    [currentWeatherFail]: (state) => ({
      ...state, localFail: true
    })
  },
  initialState
);
