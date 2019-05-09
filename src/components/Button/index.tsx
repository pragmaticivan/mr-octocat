import React from "react";
import style from "./style.css";

export default class Button extends React.Component {
  render() {
    return (
      <button className={style.btnFollow} >{this.props.children}</button>
    )
  }
}
