import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import title from "../symbols/title";
import markdown from "../symbols/markdown";

const centerTitleTextVideoSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Zentriert-Titel-Text-Video",
  name: "centerTitleTextVideo",
  widget: "object",
  i18n: true,
  fields: [
    title,
    markdown,
    {
      label: "YouTube Video Code",
      name: "video",
      widget: "string",
    },
  ],
});

export default centerTitleTextVideoSection;
