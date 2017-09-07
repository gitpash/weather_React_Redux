import { createAction } from "redux-actions";
import superagent from 'superagent';
import {KEY, URL} from '../helpers/data';

export const currentWeather = createAction('CURRENT_WEATHER');
export const currentWeatherFail = createAction('CURRENT_WEATHER_FAIL');

export const getWeather = position => async dispatch => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  try {
    const {body: response} = await superagent
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`)
      .send();
      console.log(response)
    dispatch(currentWeather(response))
  } catch (err) {
    dispatch(currentWeatherFail())
    throw err;
  }
}
