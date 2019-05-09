import React from "react";
import { Profile } from "../../src/types";
import Sidebar from "../../src/containers/Sidebar";
import RepositoryArea from "../../src/containers/RepositoryArea";
import "../../src/styles/global.css";
import style from "./style.css";
import { fetchUserProfile } from "../../src/actions/profile";
import { fetchUserRepositories } from "../../src/actions/repository";

interface Props {
  userProfile: Profile;
  pageTab: string | null;
}

export default class IndexPage extends React.Component<Props> {
  static async getInitialProps({ store, query }) {
    await Promise.all([store.dispatch(fetchUserProfile()), store.dispatch(fetchUserRepositories())]);
    return { pageTab: query.tab || null };
  }

  render() {
    const { pageTab } = this.props;
    return (<div className={style.container}>
      <Sidebar />
      <RepositoryArea pageTab={pageTab} />
    </div>)
  }
}
