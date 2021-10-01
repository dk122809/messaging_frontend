import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} type={props.type}>
      {props.value}
    </button>
  );
};

export default Button;
