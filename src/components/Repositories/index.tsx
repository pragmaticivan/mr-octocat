import Button from "../Button";
import InputSearch from "../InputSearch";
import React from "react";
import RepoCardFull from "../RepoCardFull";
import style from "./style.css";

interface Props {
  repositories: [];
}

export default class Repositories extends React.Component<Props> {

  onInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e", e.target.value);
  };

  render() {
    const { repositories } = this.props;
    return (
      <div>
        <div className={style.searchWrapper}>
          <div className={style.searchInput}>
            <InputSearch onInput={this.onInputSearch} />
          </div>
          <div className={style.searchSelect}>
            <Button>Type: All v</Button>
          </div>
          <div className={style.searchSelect}>
            <Button>Language: All v</Button>
          </div>
        </div>
        <div className={style.repoCardList}>
          {repositories.map((repo: any) => {
            return <RepoCardFull repository={repo} key={repo.id} />;
          })}
        </div>
      </div>
    );
  }
}
