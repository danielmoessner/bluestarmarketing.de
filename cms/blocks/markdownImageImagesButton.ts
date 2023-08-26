import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import fullCta from "../symbols/fullCta";

const markdownImageImagesButton = (): CmsFieldObject & CmsFieldBase => ({
  label: "Text-Bild-Bilder-Button",
  name: "markdownImageImagesButton",
  widget: "object",
  fields: [
    {
      label: "Markdown",
      name: "markdown",
      i18n: true,
      widget: "markdown",
    },
    {
      label: "Bild",
      name: "image",
      widget: "image",
      i18n: false,
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

export default markdownImageImagesButton;
