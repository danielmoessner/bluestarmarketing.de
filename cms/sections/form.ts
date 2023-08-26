import { CmsFieldBase, CmsFieldObject } from "decap-cms";

const formSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Formular",
  name: "form",
  widget: "object",
  i18n: false,
  fields: [
    {
      label: "Platzhalter",
      name: "placeholder",
      widget: "hidden",
      default: "---",
      hint: "Eingabe wird ignoriert aus technischen Gründen notwenig.",
    },
  ],
});

export default formSection;
