import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import image from "cms/symbols/image";
import text from "cms/symbols/text";

const contact: CmsCollectionFile = {
  file: "content/page/contact.json",
  label: "Kontakt",
  name: "contact",
  i18n: true,
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
      label: "Benefits",
      name: "benefits",
      i18n: true,
      widget: "object",
      fields: [
        title,
        { label: "Untertitel", name: "subtitle", i18n: true, widget: "string" },
        {
          label: "Textbild",
          name: "textimage",
          i18n: true,
          widget: "image",
          required: false,
        },
        {
          label: "Text Vorher",
          name: "pretext",
          i18n: true,
          widget: "text",
        },
        {
          label: "Punkte",
          name: "points",
          i18n: true,
          widget: "list",
          field: {
            label: "Punkt",
            name: "punkt",
            i18n: true,
            widget: "string",
          },
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          i18n: true,
          widget: "text",
        },
        image,
      ],
    },
    {
      label: "Formular",
      name: "form",
      i18n: true,
      widget: "object",
      fields: [
        title,
        image,
        {
          label: "E-Mail Text",
          name: "emailtext",
          i18n: true,
          widget: "string",
        },
        {
          label: "Telefon Text",
          name: "phonetext",
          i18n: true,
          widget: "string",
        },
      ],
    },
  ],
};

export default contact;
