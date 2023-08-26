import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "decap-cms";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";

const customers: CmsCollectionFile = {
  file: "content/page/customers.json",
  label: "Unsere Kunden",
  i18n: true,
  name: "customers",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title,
        image,
        text,
        {
          label: "Text Vorher",
          name: "pretext",
          i18n: true,
          widget: "text",
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          i18n: true,
          widget: "text",
        },
        {
          label: "Textbild",
          name: "textimage",
          i18n: true,
          widget: "image",
          required: false,
        },
        cta,
      ],
    },
    {
      label: "Kundenstimmen",
      name: "customers",
      i18n: true,
      widget: "object",
      fields: [title],
    },
  ],
};

export default customers;
