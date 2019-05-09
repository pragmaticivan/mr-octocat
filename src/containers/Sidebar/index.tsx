import Button from "../../components/Button";
import { Profile } from "../../types";
import React from "react";
import UserName from "../../components/UserName";
import style from "./style.css";
import { connect } from 'react-redux';

interface Props {
  userProfile: Profile;
}

class Sidebar extends React.Component<Props> {
  render() {
    const { userProfile } = this.props;
    return (
      <div className={style.container}>
        <img src={userProfile.avatarUrl} className={style.image_profile} />

        <div className={style.userProfileWrapper}>
          <UserName userProfile={userProfile} />
        </div>

        <Button>Follow</Button>

        <div className={style.profileInfo}>
          {/* <ul>
            <li>Pro</li>
            <li>i - San Francisco</li>
            <li>i - octocat@github.com</li>
            <li>i - http://www.github.com/blog</li>
          </ul> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.profile.userProfile,
  }
}

export default connect(mapStateToProps)(Sidebar);
