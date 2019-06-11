import Select from "../Select";
import InputSearch from "../InputSearch";
import React from "react";
import RepoCardFull from "../RepoCardFull";
import style from "./style.css";
import orderBy from "lodash/orderBy";

interface Props {
  repositories: [];
}

export default class Repositories extends React.Component<Props> {
  render() {
    const { repositories } = this.props;
    const latestRepos = orderBy(repositories, ["updated_at"], ["desc"])
    return (
      <div>
        <div className={style.searchWrapper}>
          <div className={style.inputWrapper}>
            <InputSearch />
          </div>
          <div className={style.typeWrapper}>
            <Select selectLabel={"Type: All"} />
          </div>
          <div className={style.languageWrapper}>
            <Select selectLabel={"Language: All"} />
          </div>
        </div>
        <div className={style.repoCardList}>
          {latestRepos.map((repo: any) => {
            return <RepoCardFull repository={repo} key={repo.id} />;
          })}
        </div>
      </div>
    );
  }
}
