import React from "react";
import { mount } from "enzyme";
import App from "./app";
import { addCityAction, weatherReceived, addCity } from "../actions/addCity";
import { wrap } from "../setup";
import {KEY, URL} from '../helpers/data';


const setup = () => {
  const holder = mount(wrap(<App />));
  return { holder };
};

test("should render wrapper", () => {
  const { holder } = setup();
  expect(holder).toHaveLength(1);
});

test("wrapper should render add button", () => {
  const { holder } = setup();
  expect(holder.find('[data-name="add-button"]')).toHaveLength(1);
});

test('should prevent adding empty field', () => {
  const { holder } = setup();
  holder.find('[data-name="add-button"]').simulate("click");
  expect(holder.find(`[data-name="city-${0}"]`)).toHaveLength(0);
})

test("should clear input field after button click", () => {
  const { holder } = setup();
  const input = holder.find("input");

  input.simulate("change", (input.node.value = "moscow"));
  expect(input.node.value).toEqual("moscow");

  holder.find('[data-name="add-button"]').simulate("click");
  expect(input.node.value).toEqual("");
});

// need more test for testing API, but have not enough time, sorry...