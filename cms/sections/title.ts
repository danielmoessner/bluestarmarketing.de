import { CmsFieldBase, CmsFieldObject } from "decap-cms";

const titleSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Title",
  name: "title",
  widget: "object",
  i18n: false,
  fields: [
    {
      label: "Titel",
      name: "title",
      widget: "string",
      i18n: true,
    },
  ],
});

export default titleSection;
