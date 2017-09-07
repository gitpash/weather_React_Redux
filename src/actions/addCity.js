import { createAction } from "redux-actions";
import superagent from "superagent";
import { KEY, URL } from "../helpers/data";

export const addCityAction = createAction("ADD_CITY_ACTION");
export const weatherReceived = createAction("WEATHER_RECEIVED_ACTION");
export const weatherReceiveFail = createAction("WEATHER_RECEIVE_FAIL");

export const addCity = city => async dispatch => {
  try {
    const { body: response } = await superagent
      .get(`${URL}${city}&APPID=${KEY}&units=metric`)
      .send();
    dispatch(weatherReceived(response));
  } catch (err) {
    dispatch(weatherReceiveFail())
    throw err;
  }
};
