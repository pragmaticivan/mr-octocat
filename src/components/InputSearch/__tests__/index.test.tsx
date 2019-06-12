import InputSearch from "../";
import React from "react";
import { shallow } from "enzyme";

describe("InputSearch", () => {
  it("renders the component", () => {
    const wrapper = shallow(<InputSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
