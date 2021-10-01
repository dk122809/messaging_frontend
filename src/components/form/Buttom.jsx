import React from "react";
import { NavLink } from "react-router-dom";

const Buttom = (props) => {
  return (
    <div className="mt-5 text-center">
      <p>
        {props.title} ?
        <NavLink to={props.to} className="fw-medium text-primary">
          {props.value}
        </NavLink>
      </p>
    </div>
  );
};

export default Buttom;
