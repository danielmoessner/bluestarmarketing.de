import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import title from "../symbols/title";
import markdown from "../symbols/markdown";

const titleTextVideo = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Text-Video",
  name: "titleTextVideo",
  widget: "object",
  i18n: true,
  fields: [
    title,
    markdown,
    { label: "YouTube Video Code", name: "video", widget: "string" },
  ],
});

export default titleTextVideo;
