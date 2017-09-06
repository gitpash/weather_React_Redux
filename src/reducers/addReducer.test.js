import addReducer, { initialState } from "./addReducer";
import { addCity } from "../actions/addCity";

test("initial state should be empty by default", () => {
  expect(addReducer(initialState, {}).data).toEqual([]);
});

test("shoild save data to array on addCity action", () => {
  const city = "Spb";
  expect(addReducer(initialState, addCity(city)).data).toEqual([city]);
});
