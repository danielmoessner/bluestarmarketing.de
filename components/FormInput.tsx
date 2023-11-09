import React from "react";

function FormInput({
  name,
  autoComplete = "",
  type = "text",
  element = "input",
  label,
  attrs = {},
  className = "",
  required = false,
  placeholder = "",
  children = null,
  value = "",
  register,
  error,
}) {
  const Tag = element;

  return (
    <div className={className}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={name} className="block text-sm font-medium">
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

export default FormInput;
