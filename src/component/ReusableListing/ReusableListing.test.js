import React from "react";
import { shallow } from "enzyme";
import ReusableListing from "./ReusableListing";

describe("ReusableListing", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReusableListing />);
    expect(wrapper).toMatchSnapshot();
  });
});
