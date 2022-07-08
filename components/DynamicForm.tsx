import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import DynamicInput, { InputProps } from "./DynamicInput";
import Button from "./Button";
import Heading from "./Heading";
import { useForm, Controller } from "react-hook-form";
import { Switch } from "@headlessui/react";

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
  const [formSent, setFormSent] = useState(false);

  const form = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
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
        console.error("Form Error:", error);
        alert("Es ist leider ein Fehler passiert.");
      });
  };

  const onError = (errors, e) => console.log(errors, e);

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
          onSubmit={handleSubmit(onSubmit, onError)}
          data-netlify="true"
          noValidate
          className={` grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8`}
        >
          <input type="hidden" name="form-name" value={name} />

          {fields.map((field) => (
            // eslint-disable-next-line
            <DynamicInput key={field.name} {...field} error={errors[field.name]} register={register} />
          ))}

          <div className="sm:col-span-2">
            <Switch.Group>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Controller
                    control={control}
                    name="dataProtection"
                    rules={{ required: "Zustimmung erforderlich." }}
                    render={({ field: { onChange, value } }) => (
                      <Switch
                        checked={value}
                        onChange={onChange}
                        className={`${
                          value ? "bg-bsm-ocean" : "bg-gray-200"
                        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bsm-ocean`}
                      >
                        <span
                          aria-hidden="true"
                          className={`${
                            value ? "translate-x-5" : "translate-x-0"
                          } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                        />
                      </Switch>
                    )}
                  />
                </div>
                <div className="ml-3">
                  <Switch.Label className="text-base text-gray-500">
                    {dataProtectionText}
                  </Switch.Label>
                </div>
              </div>
            </Switch.Group>
            {errors.dataProtection && (
              <span className="block mt-1 text-sm font-bold text-red-600">
                {errors.dataProtection.message}
              </span>
            )}
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
    "Vielen Dank für deine Anfrage wir werden uns schnellstmöglich bei dir melden.",
};

Component.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape(InputProps)).isRequired,
  dataProtectionText: PropTypes.string,
  name: PropTypes.string,
  successHeading: PropTypes.string,
  successText: PropTypes.string,
};

export default Component;
