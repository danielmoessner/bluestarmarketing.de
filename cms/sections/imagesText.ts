import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import markdown from "../symbols/markdown";

const imagesText = (): CmsFieldObject & CmsFieldBase => ({
  label: "Bilder-Text",
  name: "imagesText",
  widget: "object",
  i18n: true,
  fields: [
    {
      label: "Bilder",
      name: "images",
      widget: "list",
      i18n: false,
      field: { label: "Bild", name: "image", widget: "image" },
    },
    markdown,
  ],
});

export default imagesText;
