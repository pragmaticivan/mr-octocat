import React from "react";
import style from "./style.css";

interface Props {
  repository: any;
}

export default class RepoCard extends React.Component<Props> {
  render() {
    const { repository } = this.props;
    return (
      <div className={style.container}>
        <a href={repository.html_url} className={style.repoTitle}>
          {repository.name}
        </a>
        <p>
          {repository.description}
        </p>
        <ul className={style.repoData}>
          <li>
            <span className="langColor"></span>
            HTML
          </li>
          <li>
                * 10.1k
          </li>
          <li>
                y 104k
          </li>
        </ul>
      </div>
    )
  }
}
