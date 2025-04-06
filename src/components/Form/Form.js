// src/components/Form/Form.js
import React, { useState } from "react";
import "./Form.css";
import Textbox from "../TextBox/TextBox";
import CountryDropDown from "../CountrySelect/CountryDropDown";
import countries from "../../data/countries.json";
import formFields from "./FormFields";
import { submitForm } from "../../api/formApi";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pancard: "",
    country: "",
    address: "",
    city: "",
    state: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm({ formData, setFormData });
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-box">
        <h1 className="header">USER FORM</h1>

        {formFields.map((field) => (
          <Textbox
            key={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            name={field.name}
            placeholder={field.placeholder}
            label={field.label}
            type={field.type || "text"}
          />
        ))}

        <CountryDropDown
          countries={countries}
          label={"Country"}
          name={"country"}
          selected={formData.country}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
