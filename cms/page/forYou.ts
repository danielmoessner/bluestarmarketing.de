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
  i18n: true,
  name: "forYou",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title, image, text],
    },
    {
      label: "Über uns",
      name: "about",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Textbild",
          name: "textimage",
          i18n: true,
          widget: "image",
          required: false,
        },
        title,
        text,
        image,
        {
          label: "Zitat",
          name: "quote1",
          i18n: true,
          widget: "text",
        },
        {
          label: "Zitat",
          name: "quote2",
          i18n: true,
          widget: "text",
        },
        {
          label: "Nach Zitat",
          name: "afterquote",
          i18n: true,
          widget: "text",
        },
        cta,
      ],
    },
    {
      label: "CTA",
      name: "cta",
      i18n: true,
      widget: "object",
      fields: [title, text, cta],
    },
  ],
};

export default forYou;
