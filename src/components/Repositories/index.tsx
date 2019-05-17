import React from "react";
import RepoCard from "../RepoCard";
import style from "./style.css";

interface Props {
  repositories: [];
}

export default class Repositories extends React.Component<Props> {
  render() {
    const { repositories } = this.props;
    return (
      <div>
        <div className={style.repoCardList}>
          {repositories.map((repo: any) => {
            return <RepoCard repository={repo} key={repo.id} />;
          })}
        </div>
      </div>
    );
  }
}
