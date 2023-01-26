import React from "react";

function FormCheckbox({ name, label, required, register, error }) {
  return (
    <div className="sm:col-span-2">
      <style jsx global>
        {`
          input[type="checkbox"]:checked {
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
          }
        `}
      </style>
      <div>
        <div className="relative flex items-center">
          <div className="flex items-center h-5">
            <input
              {...register(name, { required })}
              type="checkbox"
              name={name}
              id={name}
              required={required}
              className="w-4 h-4 bg-center bg-no-repeat border-2 border-gray-300 rounded-none appearance-none cursor-pointer text-bsm-orientblue focus:ring-bsm-orientblue checked:bg-bsm-cornblue checked:border-bsm-cornblue bg-origin-border"
            />
          </div>
          <div className="ml-3 text-base">
            <label htmlFor={name} className="flex font-medium cursor-pointer">
              <p className="text-base [&_a]:text-bsm-faince [&_a]:underline">
                <span dangerouslySetInnerHTML={{ __html: label }} />
                {required && <span>*</span>}
              </p>
            </label>
          </div>
        </div>
        {error && (
          <span className="block mt-1 text-sm font-bold text-red-600">
            Dieses Feld ist benötigt.
          </span>
        )}
      </div>
    </div>
  );
}

export default FormCheckbox;
