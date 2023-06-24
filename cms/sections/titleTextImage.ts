import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import markdown from "../symbols/markdown";
import title from "../symbols/title";

const titleTextImageSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Text-Bild",
  name: "titleTextImage",
  widget: "object",
  i18n: true,
  fields: [title, markdown, { label: "Bild", name: "image", widget: "image" }],
});

export default titleTextImageSection;
