import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import fullCta from "../symbols/fullCta";

const markdownImagesButton = (): CmsFieldObject & CmsFieldBase => ({
  label: "Text-Bilder-Button",
  name: "markdownImagesButton",
  widget: "object",
  fields: [
    {
      label: "Markdown",
      name: "markdown",
      i18n: true,
      widget: "markdown",
    },
    {
      label: "Bilder",
      name: "images",
      widget: "list",
      i18n: false,
      field: { label: "Bild", name: "image", widget: "image" },
    },
    fullCta,
  ],
});

export default markdownImagesButton;
