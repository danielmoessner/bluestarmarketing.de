import { CmsField } from "netlify-cms-core";
import { internalLinkFields } from "./link";

const header: CmsField = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [
    { label: "Bild", name: "image", widget: "image" },
    { label: "Text", name: "text", widget: "text" },
    {
      label: "CTA",
      name: "cta",
      widget: "object",
      fields: internalLinkFields,
    },
  ],
};

export default header;
