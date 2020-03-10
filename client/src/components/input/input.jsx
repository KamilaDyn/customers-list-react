import React from "react";

import "./input.css";

const Input = ({
  label,
  name,
  value,
  onChange,
  type,
  pattern,
  required,
  className
}) => (
  <div className="label-container" name="row">
    <label className="label">
      <b>{label}</b>

      <br />
      <input
        className={className || "input"}
        name={name}
        type={type}
        label={label}
        value={value || ""}
        onChange={onChange}
        pattern={pattern}
        required={required}
      />
    </label>
  </div>
);

export default Input;
