import React from "react";
import RepoCard from "../RepoCard";
import style from "./style.css";
import orderBy from "lodash/orderBy";

interface Props {
  repositories: [];
}

export default class PopularRepositories extends React.Component<Props> {
  render() {
    const { repositories } = this.props;
    const popularRepos = orderBy(repositories, ["stargazers_count"], ["desc"]).slice(0, 6)
    return (
      <div>
        <h3 className={style.title}>Popular repositories</h3>

        <div className={style.repoCardList}>
          {popularRepos.map((repo: any) => {
            return <RepoCard repository={repo} key={repo.id} />;
          })}
        </div>
      </div>
    );
  }
}
