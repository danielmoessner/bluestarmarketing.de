import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";

const forYou: CmsCollectionFile = {
  file: "content/page/forYou.json",
  label: "Für dich",
  name: "forYou",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title, image, text],
    },
    {
      label: "Über uns",
      name: "about",
      widget: "object",
      fields: [
        {
          label: "Textbild",
          name: "textimage",
          widget: "image",
          required: false,
        },
        title,
        text,
        image,
        {
          label: "Zitat",
          name: "quote1",
          widget: "text",
        },
        {
          label: "Zitat",
          name: "quote2",
          widget: "text",
        },
        {
          label: "Nach Zitat",
          name: "afterquote",
          widget: "text",
        },
        cta,
      ],
    },
    {
      label: "CTA",
      name: "cta",
      widget: "object",
      fields: [title, text, cta],
    },
  ],
};

export default forYou;
