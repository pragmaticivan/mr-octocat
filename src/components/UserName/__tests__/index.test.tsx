import UserName from "../";
import React from "react";
import { shallow } from "enzyme";

describe("UserName", () => {
  it("renders the component", () => {
    const profile = {
      avatarUrl: "string",
      url: "string",
      name: "string",
    };
    const wrapper = shallow(<UserName userProfile={profile} />);
    expect(wrapper).toMatchSnapshot();
  });
});
