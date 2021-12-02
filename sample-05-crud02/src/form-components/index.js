import React  from "react";

export const InputField = ({ id, value, label, name, placeholder, type, onChange, onBlur, errors }) => (
  <div className="form-group">
    {label && <label htmlFor={id}>{label}</label>}
    <input
        id={id}
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
    />
    {errors && <p className="error">{errors}</p>}
  </div>
);