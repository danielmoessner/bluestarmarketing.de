import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import cta from "cms/symbols/cta";
import image from "cms/symbols/image";
import headerSmall from "cms/symbols/headerSmall";
import markdown from "cms/symbols/markdown";

const salesmarketing: CmsCollectionFile = {
  file: "content/page/salesmarketing.json",
  label: "Sales- & Marketingfunnel",
  i18n: true,
  name: "salesmarketing",
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
        markdown,
        image,
        cta,
        {
          label: "Bild Funnel",
          name: "imageFunnel",
          widget: "image",
          i18n: true,
        },
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

export default salesmarketing;
