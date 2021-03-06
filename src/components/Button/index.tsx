import React from "react";
import style from "./style.css";

interface Props {
  onClick: () => void;
}

export default class Button extends React.Component<Props> {
  render() {
    const { onClick, children } = this.props;
    return (
      <button onClick={onClick} className={style.btnFollow}>
        {children}
      </button>
    );
  }
}
