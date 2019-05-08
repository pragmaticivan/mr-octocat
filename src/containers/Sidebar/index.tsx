import React from "react";
import { Profile } from "../../types";
import style from "./style.css";
import UserName from "../../components/UserName";

interface Props {
  userProfile: Profile;
}

export default class Sidebar extends React.Component<Props> {
  render() {
    const { userProfile } = this.props;
    return (
      <div className={style.container}>
        <img src={userProfile.avatarUrl} className={style.image_profile} />

        <UserName userProfile={userProfile} />

        <button className={style.btn_follow} >Follow</button>

        <div>
          <ul>
            <li>
              Pro
            </li>
            <li>
              San Francisco
            </li>
            <li>
              octocat@github.com
            </li>
            <li>
              http://www.github.com/blog
            </li>
          </ul>
        </div>

      </div>
    )
  }
}
