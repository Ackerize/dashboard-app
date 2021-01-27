import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const SelectForm = ({ options, placeholder, noOptionsMessage, name, onChange, label, error, errorMessage, className, value }) => {
  const animatedComponents = makeAnimated();

  return (
    <div className={className ? `form-row ${className}` : "form-row"}>
      <div className="name">{label}</div>
      <div className="value">
        <div className="input-group">
          <Select
            options={options}
            name={name}
            defaultValue={value}
            className="w-100 custom-control-modal"
            components={animatedComponents}
            placeholder={placeholder}
            onChange={(selectedOption) => onChange(selectedOption, name)}
            isSearchable
            noOptionsMessage={(inputValue) => `${noOptionsMessage}`}
          />
          {error && (
          <div className="error">{errorMessage}</div>
        )}
        </div>
      </div>
    </div>
  );
};

export default SelectForm;
