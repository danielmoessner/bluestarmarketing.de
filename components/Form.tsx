import React, { useState, useRef } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import { useForm } from "react-hook-form";
import FormTextarea from "./FormTextarea";
import FormCheckbox from "./FormCheckbox";
import FormMultiple from "./FormMultiple";
import Prose from "./Prose";

const convertedFormEntries = (formData: FormData) =>
  Array.from(formData, ([key, value]) => [
    key,
    typeof value === "string" ? value : value.name,
  ]);

function Form({
  fields,
  name = "standardformular",
  successText = "Vielen Dank für deine Anfrage wir werden uns schnellstmöglich bei dir melden.",
  requiredFieldsText = "Erforderliche Felder sind mit * markiert.",
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
      redirect: "error",
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
        <div className="max-w-2xl py-24 mx-auto">
          <Prose html={successText} className="text-center" />
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
            if (field.type === "notice")
              return (
                <div key={field.title} className="sm:col-span-2">
                  <p className="block text-sm font-medium">{field.title}</p>
                  <p className="w-full text-sm">{field.text}</p>
                </div>
              );
            else if (field.fieldType === "multiple")
              return (
                <FormMultiple
                  key={field.name}
                  {...field}
                  error={errors[field.name]}
                  register={register}
                />
              );
            else if (field.fieldType === "textarea")
              return (
                <FormTextarea
                  key={field.name}
                  {...field}
                  error={errors[field.name]}
                  register={register}
                />
              );
            else if (field.fieldType === "checkbox")
              return (
                <FormCheckbox
                  key={field.name}
                  {...field}
                  error={errors[field.name]}
                  register={register}
                />
              );
            else if (field.type === "empty") return <div key={field.type} />;
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
          <div className="text-sm sm:col-span-2">{requiredFieldsText}</div>

          <div className="sm:col-span-2">
            <div className="flex justify-center">
              <Button element="button" type="submit" kind="pink">
                {submitText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
