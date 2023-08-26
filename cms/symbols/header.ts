import { CmsField } from "decap-cms";
import { internalLinkFields } from "./link";

const header: CmsField = {
  label: "Header",
  name: "header",
  i18n: true,
  widget: "object",
  fields: [
    { label: "Bild", name: "image", i18n: false, widget: "image" },
    {
      label: "Titel",
      name: "title",
      i18n: false,
      widget: "select",
      options: ["management_sales_marketing"],
      required: false,
    },
    { label: "Text", name: "markdown", i18n: true, widget: "markdown" },
    {
      label: "CTA",
      name: "cta",
      i18n: true,
      widget: "object",
      fields: internalLinkFields,
    },
  ],
};

export default header;
