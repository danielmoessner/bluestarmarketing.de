import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import title from "../symbols/title";

const titleImageSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Bild",
  name: "titleSubimage",
  widget: "object",
  i18n: true,
  fields: [title, { label: "Bild", name: "image", widget: "image" }],
});

export default titleImageSection;
