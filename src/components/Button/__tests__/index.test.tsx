import Button from "../";
import React from "react";
import { shallow } from "enzyme";

describe("Button", () => {
  it("renders the component", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Button onClick={fn}>Test BTN</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders children", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Button onClick={fn}>Test BTN</Button>);
    expect(wrapper.text()).toEqual("Test BTN");
  });
});
