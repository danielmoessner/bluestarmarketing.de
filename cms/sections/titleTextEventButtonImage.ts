import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import title from "../symbols/title";
import markdown from "../symbols/markdown";
import cta from "../symbols/cta";

const titleTextEventButtonImageSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Text-Termin-Button-Bild",
  name: "titleTextEventButtonImage",
  widget: "object",
  i18n: true,
  fields: [
    title,
    markdown,
    {
      label: "Nächster Termin",
      name: "next",
      widget: "string",
    },
    cta,
    { label: "Bild", name: "image", widget: "image" },
  ],
});

export default titleTextEventButtonImageSection;
