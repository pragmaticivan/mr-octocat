import React from "react";
import style from "./style.css";

export default class RepoCard extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <a href="javascript:void" className={style.repoTitle}>
          Spoon - Knife
        </a>
        <p>
          This repo is for demonstration purposes only
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
