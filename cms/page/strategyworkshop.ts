import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import image from "cms/symbols/image";
import headerSmall from "cms/symbols/headerSmall";
import svg from "cms/symbols/svg";

const strategyworkshop: CmsCollectionFile = {
  file: "content/page/strategyworkshop.json",
  label: "Strategieworkshop",
  name: "strategyworkshop",
  fields: [
    meta,
    headerSmall,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title,
        text,
        { label: "Text Fett", name: "boldtext", widget: "text" },
        image,
        cta,
      ],
    },
    {
      label: "Reise",
      name: "travel",
      widget: "object",
      fields: [title, svg, cta],
    },
  ],
};

export default strategyworkshop;
