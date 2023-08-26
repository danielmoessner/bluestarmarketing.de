import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import title from "../symbols/title";
import { internalLinkFields } from "../symbols/link";
import kind from "../symbols/kind";

const titleImageButtonSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Bild-Button",
  name: "titleImageButton",
  widget: "object",
  i18n: true,
  fields: [
    title,
    { label: "Bild", name: "image", widget: "image" },
    {
      label: "CTA",
      name: "cta",
      i18n: true,
      widget: "object",
      fields: [...internalLinkFields, kind],
    },
  ],
});

export default titleImageButtonSection;
