import { CmsField } from "netlify-cms-core";

const headerSmall: CmsField = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [{ label: "Bild", name: "image", widget: "image" }],
};

export default headerSmall;
