import { CmsField } from "netlify-cms-core";
import { internalLinkFields } from "./link";

const header: CmsField = {
  label: "Header",
  name: "header",
  i18n: true,
  widget: "object",
  fields: [
    { label: "Bild", name: "image", i18n: false, widget: "image" },
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
