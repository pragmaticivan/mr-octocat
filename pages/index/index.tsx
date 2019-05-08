import React from "react";
import axios from "axios";
import { Profile } from "../../src/types";
import Sidebar from "../../src/containers/Sidebar";
import RepositoryArea from "../../src/containers/RepositoryArea";
import "../../src/styles/global.css";
import style from "./style.css";

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
    return (<div className={style.container}>
      <Sidebar userProfile={userProfile} />
      <RepositoryArea />
    </div>)
  }
}
