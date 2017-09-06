import React from "react";
import { mount } from "enzyme";
import App from "./app";
import { addCityAction } from "../actions/addCity";
import { wrap } from "../setup";

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

test("add-button should add new city on page", () => {
  const { holder } = setup();
  expect(holder.find(`[data-name="city-${0}"]`)).toHaveLength(0);

  holder.find("input").simulate("change", { target: { value: "msk" } });
  holder.find('[data-name="add-button"]').simulate("click");
  expect(holder.find(`[data-name="city-${0}"]`)).toHaveLength(1);
});

test("should clear input field after button click", () => {
  const { holder } = setup();
  const input = holder.find("input");

  input.simulate("change", (input.node.value = "msk"));
  expect(input.node.value).toEqual("msk");
  
  holder.find('[data-name="add-button"]').simulate("click");
  expect(input.node.value).toEqual("");
});
