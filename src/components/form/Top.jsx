import React from "react";

const Top = (props) => {
  return (
    <div className="text-center mb-4">
      <h4>{props.title}</h4>
      {props.subTitle && (
        <p className="text-muted mb-4">{props.subTitle}</p>
      )}
    </div>
  );
};

export default Top;
