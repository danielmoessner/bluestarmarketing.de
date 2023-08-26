import { CmsFieldBase, CmsFieldObject } from "decap-cms";

const headerSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Header",
  name: "header",
  widget: "object",
  i18n: false,
  fields: [
    { label: "Bild", name: "image", widget: "image" },
    {
      label: "Titel",
      name: "title",
      widget: "string",
      i18n: true,
    },
  ],
});

export default headerSection;
