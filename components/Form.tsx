import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import FormInput, { InputProps } from "./FormInput";
import Button from "./Button";
import Heading from "./Heading";
import { useForm } from "react-hook-form";
import FormTextarea from "./FormTextarea";
import FormCheckbox from "./FormCheckbox";

const convertedFormEntries = (formData: FormData) =>
  Array.from(formData, ([key, value]) => [
    key,
    typeof value === "string" ? value : value.name,
  ]);

function Form({
  fields,
  name,
  successText,
  successHeading,
  submitText = "Absenden",
}) {
  const [formSent, setFormSent] = useState(false);

  const form = useRef(null);

  const {
    register,
    handleSubmit,
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
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
          noValidate
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <input type="hidden" name="form-name" value={name} />

          {fields.map((field) => {
            if (field.type === "textarea")
              return (
                <FormTextarea
                  key={field.name}
                  {...field}
                  error={errors[field.name]}
                  register={register}
                />
              );
            else if (field.type === "checkbox")
              return (
                <FormCheckbox
                  key={field.name}
                  {...field}
                  error={errors[field.name]}
                  register={register}
                />
              );
            else
              return (
                <FormInput
                  key={field.name}
                  {...field}
                  error={errors[field.name]}
                  register={register}
                />
              );
          })}

          <div className="sm:col-span-2">
            <Button element="button" type="submit">
              {submitText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.defaultProps = {
  name: "standardformular",
  successHeading: "Vielen Dank",
  successText:
    "Vielen Dank für deine Anfrage wir werden uns schnellstmöglich bei dir melden.",
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape(InputProps)).isRequired,
  dataProtectionText: PropTypes.string,
  name: PropTypes.string,
  successHeading: PropTypes.string,
  successText: PropTypes.string,
};

export default Form;
