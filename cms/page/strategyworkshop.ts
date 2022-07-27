import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import image from "cms/symbols/image";
import headerSmall from "cms/symbols/headerSmall";

const strategyworkshop: CmsCollectionFile = {
  file: "content/page/strategyworkshop.json",
  label: "Strategieworkshop",
  i18n: true,
  name: "strategyworkshop",
  fields: [
    meta,
    headerSmall,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title,
        text,
        { label: "Text Fett", name: "boldtext", i18n: true, widget: "text" },
        image,
        cta,
      ],
    },
    {
      label: "Reise",
      name: "travel",
      i18n: true,
      widget: "object",
      fields: [title, image, cta],
    },
  ],
};

export default strategyworkshop;
