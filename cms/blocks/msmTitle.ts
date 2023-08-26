import { CmsFieldBase, CmsFieldObject } from "decap-cms";

const msmTitle = (): CmsFieldObject & CmsFieldBase => ({
  label: "MSM-Titel",
  name: "msmTitle",
  widget: "object",
  fields: [
    {
      label: "Untertitel",
      name: "subtitle",
      widget: "string",
    },
  ],
});

export default msmTitle;
