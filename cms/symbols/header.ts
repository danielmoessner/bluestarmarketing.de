import { CmsField } from "netlify-cms-core";
import { internalLinkFields } from "./link";

const header: CmsField = {
  label: "Header",
  name: "header",
  i18n: true,
  widget: "object",
  fields: [
    { label: "Bild", name: "image", i18n: true, widget: "image" },
    { label: "Text", name: "text", i18n: true, widget: "text" },
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
