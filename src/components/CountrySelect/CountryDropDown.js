import React from "react";
import "./CountryDropDown.css";

const CountryDropDown = ({
  countries,
  selected,
  onChange,
  label,
  name,
  className = "",
}) => {
  const handleChange = (event) => {
    onChange && onChange(event);
  };
  return (
    <div className="drop-down-container">
      <label className={`label ${className}`}>{label}</label>
      <select value={selected} onChange={handleChange} name={name}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropDown;
