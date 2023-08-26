import { CmsFieldBase, CmsFieldObject } from "decap-cms";

const boldCenterTextBlock = (): CmsFieldObject & CmsFieldBase => ({
  label: "Dicker-Text",
  name: "boldCenterText",
  widget: "object",
  fields: [
    {
      label: "Text",
      name: "text",
      widget: "text",
    },
  ],
});

export default boldCenterTextBlock;
