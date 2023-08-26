import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import title from "../symbols/title";

const titleImageImageSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel \\ Bild - Bild",
  name: "titleImageImage",
  widget: "object",
  i18n: false,
  fields: [
    title,
    { label: "Bild Links", name: "image1", widget: "image" },
    { label: "Alt Links", name: "alt1", widget: "string", required: false },
    { label: "Bild Rechts", name: "image2", widget: "image" },
    { label: "Alt Rechts", name: "alt2", widget: "string", required: false },
  ],
});

export default titleImageImageSection;
