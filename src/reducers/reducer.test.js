import reducer, { initialState } from "./reducer";
import {
  addCityAction,
  weatherReceived,
  weatherReceiveFail
} from "../actions/addCity";
import { currentWeather, currentWeatherFail } from "../actions/getWeather";
import { deleteCity } from "../actions/deleteCity";

test("initial state should be empty by default", () => {
  expect(reducer(initialState, {}).data).toEqual([]);
});

test("fetchError should be false by default", () => {
  expect(reducer(initialState, {}).fetchError).toEqual(false);
});

test("localFail should be false by default", () => {
  expect(reducer(initialState, {}).localFail).toEqual(false);
});

test("should save data on addCity action", () => {
  const city = { name: "Spb", main: { temp: 23 } };
  expect(reducer(initialState, weatherReceived(city)).data).toEqual([
    { name: "Spb", temp: 23 }
  ]);
});

test("should delete city from array on deleteCity", () => {
  const state = { ...initialState, data: [{ name: "msk", temp: 17 }] };
  expect(reducer(state, deleteCity(0)).data).toEqual([]);
});

test("should save current weather on mount", () => {
  const city = { name: "Spb", main: { temp: 23 } };
  expect(reducer(initialState, currentWeather(city)).localData).toEqual({
    name: "Spb",
    temp: 23
  });
});

test("should set fetchError true on weatherReceiveFail", () => {
  expect(reducer(initialState, weatherReceiveFail()).fetchError).toEqual(true);
});

test("should set localFail true on currentWeatherFail", () => {
  expect(reducer(initialState, currentWeatherFail()).localFail).toEqual(true);
});
