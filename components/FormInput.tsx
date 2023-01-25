import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

function FormInput({
  name,
  autoComplete,
  type,
  element,
  label,
  attrs,
  className,
  required,
  placeholder,
  children,
  value,
  register,
  error,
}) {
  const Tag = element;

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span>*</span>}
        <div className="mt-1">
          <Tag
            {...register(name, { required: required })}
            type={type}
            name={name}
            id={name}
            defaultValue={value}
            required={required}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className="block w-full px-4 py-1.5 text-base border-2 border-gray-300 appearance-none focus:outline-none focus:border-bsm-ocean"
            // eslint-disable-next-line
            {...attrs}
          >
            {children}
          </Tag>
          {error && (
            <span className="block mt-1 text-sm font-bold text-red-600">
              Dieses Feld ist benötigt.
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

FormInput.defaultProps = {
  autoComplete: "",
  type: "text",
  element: "input",
  attrs: {},
  className: "",
  required: true,
  value: "",
  children: null,

  placeholder: "",
};

export const InputProps = {
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  element: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: ChildrenData,
  className: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
};

FormInput.propTypes = InputProps;

export default FormInput;
