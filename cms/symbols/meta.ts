import { CmsField } from "decap-cms";

const meta: CmsField = {
  label: "Meta",
  name: "meta",
  widget: "object",
  i18n: true,
  fields: [
    { label: "Titel", name: "title", widget: "string", i18n: true },
    { label: "Beschreibung", name: "description", widget: "text", i18n: true },
    {
      label: "Bild",
      name: "image",
      widget: "image",
      required: false,
      i18n: true,
    },
    {
      label: "Keywords",
      name: "keywords",
      widget: "markdown",
      required: false,
      i18n: true,
    },
  ],
};

export default meta;
