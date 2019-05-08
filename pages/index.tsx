import React from "react";
import axios from "axios";
import { Profile } from "../src/types";

interface Props {
  userProfile: Profile;
}

export default class IndexPage extends React.Component<Props> {
  static async getInitialProps() {
    let userProfile: Profile;
    const profile = (await axios.get("https://api.github.com/users/octocat")).data;
    userProfile = {
      name: profile.name,
      avatarUrl: profile.avatar_url,
      url: profile.url
    }
    return { userProfile };
  }

  render() {
    const { userProfile } = this.props;
    return (<React.Fragment>
      <h1>Next.js App written in TypeScript with Jest - {userProfile.name}</h1>
      <img src={userProfile.avatarUrl} />
    </React.Fragment>)
  }
}
