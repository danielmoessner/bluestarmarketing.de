import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import title from "../symbols/title";
import markdown from "../symbols/markdown";
import cta from "../symbols/cta";

const imageTitleRoseTextButton = (): CmsFieldObject & CmsFieldBase => ({
  label: "Bild-Titel-Rose-Text-Button",
  name: "imageTitleRoseTextButton",
  widget: "object",
  i18n: true,
  fields: [
    { label: "Bild", name: "image", widget: "image" },
    title,
    { label: "Rose", name: "rose", widget: "string" },
    markdown,
    cta,
  ],
});

export default imageTitleRoseTextButton;
