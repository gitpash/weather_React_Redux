import React from "react";
import { shallow } from "enzyme";
import App from "./app";

test("should render wrapper", () => {
  const holder = shallow(<App />);
  expect(holder).toHaveLength(1);
});

