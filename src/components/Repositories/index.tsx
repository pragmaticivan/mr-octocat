import Select from "../Select";
import InputSearch from "../InputSearch";
import React from "react";
import RepoCardFull from "../RepoCardFull";
import style from "./style.css";
import { Repository } from "../../types";

interface Props {
  repositories: Repository[];
}

export default class Repositories extends React.Component<Props> {
  render() {
    const { repositories } = this.props;
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
          {repositories.map((repo: Repository) => {
            return <RepoCardFull repository={repo} key={repo.id} />;
          })}
        </div>
      </div>
    );
  }
}
