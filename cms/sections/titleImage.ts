import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import title from "../symbols/title";

const titleImageSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Bild",
  name: "titleImage",
  widget: "object",
  i18n: true,
  fields: [
    title,
    { label: "Bild", name: "image", widget: "image" },
    {
      label: "Mobiles Bild",
      name: "mobileImage",
      widget: "image",
      required: false,
    },
  ],
});

export default titleImageSection;
