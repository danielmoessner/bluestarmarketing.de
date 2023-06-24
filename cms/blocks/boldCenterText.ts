import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

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
