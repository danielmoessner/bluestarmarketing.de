import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";

const customers: CmsCollectionFile = {
  file: "content/page/customers.json",
  label: "Unsere Kunden",
  name: "customers",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title,
        image,
        text,
        {
          label: "Text Vorher",
          name: "pretext",
          widget: "text",
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          widget: "text",
        },
        {
          label: "Textbild",
          name: "textimage",
          widget: "image",
          required: false,
        },
        cta,
      ],
    },
    {
      label: "Kundenstimmen",
      name: "customers",
      widget: "object",
      fields: [title],
    },
  ],
};

export default customers;
