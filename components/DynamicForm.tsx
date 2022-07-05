import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DynamicInput, { InputProps } from "./DynamicInput";
import Button from "./Button";
import Heading from "./Heading";

const convertedFormEntries = (formData: FormData) =>
  Array.from(formData, ([key, value]) => [
    key,
    typeof value === "string" ? value : value.name,
  ]);

function Component({
  fields,
  dataProtectionText,
  name,
  successText,
  successHeading,
}) {
  const [enabled, setEnabled] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const form = useRef(null);

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-undef
      const formData = new FormData(form.current);
      // eslint-disable-next-line no-undef
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(convertedFormEntries(formData)).toString(),
      })
        .then(() => setFormSent(true))
        .catch((error) => {
          // eslint-disable-next-line
          console.log('Form error', error)
        });
    };
    // eslint-disable-next-line no-undef
    document.querySelector(`#${name}`).addEventListener("submit", handleSubmit);
  }, [name]);

  return (
    <div className="max-w-none">
      <div className={`${formSent ? "block" : "hidden"}`}>
        <div className="pt-24">
          <Heading element="div" size="h3">
            {successHeading}
          </Heading>
          <p className="mt-2 prose">{successText}</p>
        </div>
      </div>

      <div className={`${formSent ? "hidden" : "block"}`}>
        <form
          name={name}
          id={name}
          ref={form}
          data-netlify="true"
          className={` grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8`}
        >
          <input type="hidden" name="form-name" value={name} />

          {fields.map((field) => (
            // eslint-disable-next-line
          <DynamicInput key={field.name} {...field} />
          ))}

          <div className="sm:col-span-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setEnabled(!enabled)}
                  className={`${
                    enabled ? "bg-bsm-ocean" : "bg-gray-200"
                  } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bsm-ocean`}
                  role="switch"
                  aria-checked="false"
                >
                  <input
                    className="transform translate-x-3 translate-y-2 sr-only"
                    type="checkbox"
                    checked={enabled}
                    onChange={() => ({})}
                    required
                    tabIndex={-1}
                  />
                  <span
                    aria-hidden="true"
                    className={`${
                      enabled ? "translate-x-5" : "translate-x-0"
                    } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                  />
                </button>
              </div>
              <div className="ml-3">
                <p className="text-base text-gray-500">{dataProtectionText}</p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <Button element="button" type="submit" ringOffset="white">
              Absenden
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

Component.defaultProps = {
  name: "standardformular",
  dataProtectionText:
    "Ich stimme zu, dass meine Daten zum Bearbeiten dieser Anfrage vorrübergehend gespeichert werden.",
  successHeading: "Vielen Dank",
  successText:
    "Vielen Dank für deine Anfrage wir weden uns schnellstmöglich bei dir melden.",
};

Component.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape(InputProps)).isRequired,
  dataProtectionText: PropTypes.string,
  name: PropTypes.string,
  successHeading: PropTypes.string,
  successText: PropTypes.string,
};

export default Component;
