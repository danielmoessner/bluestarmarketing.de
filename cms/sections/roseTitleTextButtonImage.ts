import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import title from "../symbols/title";
import markdown from "../symbols/markdown";
import cta from "../symbols/cta";

const roseTitleTextButtonImage = (): CmsFieldObject & CmsFieldBase => ({
  label: "Rose-Titel-Text-Button-Image",
  name: "roseTitleTextButtonImage",
  widget: "object",
  i18n: true,
  fields: [
    { label: "Rose", name: "rose", widget: "string" },
    title,
    markdown,
    cta,
    { label: "Bild", name: "image", widget: "image" },
  ],
});

export default roseTitleTextButtonImage;
