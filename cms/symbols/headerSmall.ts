import { CmsField } from "decap-cms";

const headerSmall: CmsField = {
  label: "Header",
  name: "header",
  i18n: true,
  widget: "object",
  fields: [
    { label: "Bild", name: "image", i18n: "translate", widget: "image" },
    {
      label: "Balkenfarbe",
      name: "color",
      widget: "string",
      i18n: "translate",
    },
  ],
};

export default headerSmall;
