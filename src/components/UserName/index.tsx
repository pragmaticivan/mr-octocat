import { Profile } from "../../types";
import React from "react";
import style from "./style.css";

interface Props {
  userProfile: Profile
}

export default function UserName(props: Props) {
  const { userProfile } = props;
  return (
    <React.Fragment>
      <span className={style.userName} >{userProfile.name}</span>
      <span className={style.userGithubName} >octocat</span>
    </React.Fragment>
  )
}
