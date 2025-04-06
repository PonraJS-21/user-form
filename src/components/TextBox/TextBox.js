// src/components/Textbox/Textbox.js
import React from "react";
import "./TextBox.css";

const Textbox = ({
  value,
  onChange,
  placeholder,
  type = "text",
  name,
  className,
  label = "",
}) => {
  const handleChange = (event) => {
    onChange && onChange(event);
  };

  return (
    <div className="textbox-container">
      <label className={`label ${className}`}>
        {label ? label : placeholder}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="textbox"
        name={name}
      />
    </div>
  );
};

export default Textbox;
