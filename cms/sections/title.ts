import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

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
