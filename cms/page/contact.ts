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
      label: "Benefits",
      name: "benefits",
      widget: "object",
      fields: [
        title,
        { label: "Untertitel", name: "subtitle", widget: "string" },
        {
          label: "Textbild",
          name: "textimage",
          widget: "image",
          required: false,
        },
        {
          label: "Text Vorher",
          name: "pretext",
          widget: "text",
        },
        {
          label: "Punkte",
          name: "points",
          widget: "list",
          field: { label: "Punkt", name: "punkt", widget: "string" },
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          widget: "text",
        },
        image,
      ],
    },
    {
      label: "Formular",
      name: "form",
      widget: "object",
      fields: [
        title,
        image,
        {
          label: "E-Mail Text",
          name: "emailtext",
          widget: "string",
        },
        {
          label: "Telefon Text",
          name: "phonetext",
          widget: "string",
        },
      ],
    },
  ],
};

export default contact;
