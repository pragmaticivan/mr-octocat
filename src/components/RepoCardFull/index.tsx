import Button from "../Button";
import React from "react";
import { langColorMap } from "../../util";
import moment from "moment";
import style from "./style.css";
import { Repository } from "../../types";
import {  kFormatter } from "../../util";
interface Props {
  repository: Repository;
}

export default class RepoCard extends React.Component<Props> {
  render() {
    const { repository } = this.props;
    return (
      <div className={style.container}>
        <div>
          <a href={repository.html_url} className={style.repoTitle}>
            {repository.name}
          </a>
          {repository.fork && (
            <span className={style.forkedFrom}>
              Forked from{" "}
              <a href={repository.parent_html_url}>{repository.parent}</a>
            </span>
          )}
          <p>{repository.description}</p>
          <ul className={style.repoData}>
            {repository.language && (
              <li>
                <span
                  className={style.langColor}
                  style={{ backgroundColor: langColorMap(repository.language) }}
                />
                {repository.language}
              </li>
            )}
            <li>
              {this.starSvg()} {kFormatter(repository.stargazers_count)}
            </li>
            <li>
              {this.forkSvg()} {kFormatter(repository.forks_count)}
            </li>
            <li>Updated {moment(repository.updated_at).fromNow()}</li>
          </ul>
        </div>
        <div>
          <Button onClick={() =>{}}>{this.starSvg()} &nbsp; Star</Button>
        </div>
      </div>
    );
  }

  starSvg() {
    return (
      <svg
        aria-label="stars"
        viewBox="0 0 14 16"
        version="1.1"
        width="14"
        height="16"
        role="img"
      >
        <path
          fillRule="evenodd"
          d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
        />
      </svg>
    );
  }

  forkSvg() {
    return (
      <svg
        aria-label="forks"
        viewBox="0 0 10 16"
        version="1.1"
        width="10"
        height="16"
        role="img"
      >
        <path
          fillRule="evenodd"
          d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
        />
      </svg>
    );
  }
}
