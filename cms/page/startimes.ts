import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import header from "../symbols/header";
import markdown from "../symbols/markdown";

const startimes: CmsCollectionFile = {
  file: "content/page/startimes.json",
  label: "Star Times",
  name: "startimes",
  i18n: true,
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Bild",
          name: "image",
          widget: "image",
        },
        title,
        markdown,
        cta,
      ],
    },
    {
      label: "Unten",
      name: "bottom",
      i18n: true,
      widget: "object",
      fields: [text],
    },
  ],
};

export default startimes;
