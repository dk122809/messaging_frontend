import React from "react";

const SelectOptionGroup = (props) => {
  const displayOption = props.options.map((item, index) => (
    <option key={index} value={item._id}>
      {item.name}
    </option>
  ));
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <div className="input-group mb-3 bg-soft-light rounded-3">
        <span className="input-group-text text-muted" id="basic-addon3">
          <i className={props.icon}></i>
        </span>
        <select className="select-option-group" onChange={props.onChange} name={props.name}>{displayOption}</select>
      </div>
    </div>
  );
};

export default SelectOptionGroup;
