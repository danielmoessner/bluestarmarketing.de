import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import markdown from "../symbols/markdown";

const startimes: CmsCollectionFile = {
  file: "content/page/startimes.json",
  label: "Star Times",
  name: "startimes",
  i18n: true,
  fields: [
    meta,
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [{ label: "Bild", name: "image", widget: "image" }],
    },
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Titel 1",
          name: "title1",
          widget: "string",
          i18n: true,
        },
        {
          label: "Bild",
          name: "image",
          widget: "image",
        },
        {
          label: "Titel 2",
          name: "title2",
          widget: "string",
          i18n: true,
        },
        markdown,
        cta,
      ],
    },
    {
      label: "Auflistung",
      name: "listing",
      widget: "object",
      i18n: true,
      fields: [
        { label: "Warum?", name: "why", widget: "string", i18n: true },
        { label: "Für Wen?", name: "who", widget: "string", i18n: true },
        {
          label: "Nächster Termin",
          name: "next",
          widget: "string",
          i18n: true,
        },
        { label: "Button", name: "button", widget: "string", i18n: true },
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
