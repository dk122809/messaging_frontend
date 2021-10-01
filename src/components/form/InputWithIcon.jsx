import React from "react";

const InputWithIcon = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <div className="input-group mb-3 bg-soft-light rounded-3">
        <span className="input-group-text text-muted" id="basic-addon3">
          <i className={props.icon}></i>
        </span>
        <input
          type={props.type}
          className="form-control form-control-lg border-light bg-soft-light"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          required={props.required}
        />
      </div>
    </div>
  );
};

export default InputWithIcon;
