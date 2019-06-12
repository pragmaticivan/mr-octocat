import Repositories from "../";
import React from "react";
import { shallow } from "enzyme";

describe("Repositories", () => {
  it("renders the component", () => {
    const repository = {
      created_at: "2016-08-02T17:35:14Z",
      description:
        "Language Savant. If your repository's language is being reported incorrectly, send us a pull request!",
      fork: true,
      forks: 53,
      forks_count: 53,
      full_name: "octocat/linguist",
      html_url: "https://github.com/octocat/linguist",
      id: 64778136,
      language: "Ruby",
      name: "linguist",
      stargazers_count: 17,
      updated_at: "2019-05-26T09:08:16Z",
    };
    const wrapper = shallow(<Repositories repositories={[repository]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
