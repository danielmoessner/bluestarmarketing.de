import { CmsFieldBase, CmsFieldObject } from "decap-cms";

const templateSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Section Name",
  name: "section",
  widget: "object",
  i18n: false,
  fields: [],
});

export default templateSection;
