import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import markdown from "../symbols/markdown";

const textVideoSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Text-Video",
  name: "textVideo",
  widget: "object",
  i18n: true,
  fields: [
    markdown,
    { label: "YouTube Video Code", name: "video", widget: "string" },
  ],
});

export default textVideoSection;
