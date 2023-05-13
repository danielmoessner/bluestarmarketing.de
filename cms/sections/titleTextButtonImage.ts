import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import title from "../symbols/title";
import markdown from "../symbols/markdown";
import cta from "../symbols/cta";

const titleTextButtonImageSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Text-Button-Bild",
  name: "titleTextButtonImage",
  widget: "object",
  i18n: true,
  fields: [
    title,
    markdown,
    cta,
    { label: "Bild", name: "image", widget: "image" },
  ],
});

export default titleTextButtonImageSection;
