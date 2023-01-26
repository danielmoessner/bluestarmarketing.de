import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import cta from "cms/symbols/cta";
import header from "../symbols/header";
import markdown from "../symbols/markdown";

const startimesmeetings: CmsCollectionFile = {
  file: "content/page/startimesmeetings.json",
  label: "Star Times Termine",
  name: "startimesmeetings",
  i18n: true,
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
        markdown,
        cta,
        {
          label: "Bild",
          name: "image",
          widget: "image",
        },
      ],
    },
    {
      label: "Termine",
      name: "meetings",
      i18n: true,
      widget: "object",
      fields: [title],
    },
    {
      label: "Unten",
      name: "bottom",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Titel Links",
          name: "titleLeft",
          widget: "string",
          i18n: true,
        },
        {
          label: "Text Links",
          name: "markdownLeft",
          widget: "markdown",
          i18n: true,
        },
        {
          label: "Titel Rechts",
          name: "titleRight",
          widget: "string",
          i18n: true,
        },
        {
          label: "Text Rechts",
          name: "markdownRight",
          widget: "markdown",
          i18n: true,
        },
        cta,
      ],
    },
  ],
};

export default startimesmeetings;
