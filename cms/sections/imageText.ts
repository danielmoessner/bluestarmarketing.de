import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import markdown from "../symbols/markdown";

const imageTextSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Bild-Text",
  name: "imageText",
  widget: "object",
  i18n: true,
  fields: [{ label: "Bild", name: "image", widget: "image" }, markdown],
});

export default imageTextSection;
