import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

const roseTitle = (): CmsFieldObject & CmsFieldBase => ({
  label: "Rose-Titel",
  name: "roseTitle",
  widget: "object",
  fields: [
    {
      label: "Titel Normal Vorher",
      name: "titleNormal",
      widget: "string",
      i18n: true,
      required: false,
    },
    {
      label: "Titel Rose",
      name: "titleRose",
      widget: "string",
      i18n: true,
      required: false,
    },
    {
      label: "Titel Normal Nachher",
      name: "titleNormalAfter",
      widget: "string",
      i18n: true,
      required: false,
    },
  ],
});

export default roseTitle;
