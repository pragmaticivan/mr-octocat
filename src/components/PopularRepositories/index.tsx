import React from "react";
import RepoCard from "../RepoCard";
import style from "./style.css";
import { Repository } from "../../types";

interface Props {
  repositories: Repository[];
}

export default class PopularRepositories extends React.Component<Props> {
  render() {
    const { repositories } = this.props;
    return (
      <div>
        <h3 className={style.title}>Popular repositories</h3>

        <div className={style.repoCardList}>
          {repositories.map((repo: Repository) => {
            return <RepoCard repository={repo} key={repo.id} />;
          })}
        </div>
      </div>
    );
  }
}
