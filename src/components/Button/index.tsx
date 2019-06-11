import React from "react";
import style from "./style.css";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, children } = props;
  return (
    <button className={style.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
