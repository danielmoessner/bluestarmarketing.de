import meta from "../symbols/meta";
import { CmsCollectionFile } from "decap-cms";
import threeCards from "../sections/threeCards";

const startimes: CmsCollectionFile = {
  file: "content/page/startimes.json",
  label: "Star Times",
  name: "startimes",
  i18n: true,
  fields: [
    meta,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          i18n: true,
        },
      ],
    },
    threeCards(),
    {
      label: "Auflistung",
      name: "listing",
      widget: "object",
      i18n: true,
      fields: [
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
      fields: [
        {
          label: "Text",
          name: "text",
          widget: "text",
          i18n: true,
          required: false,
        },
      ],
    },
  ],
};

export default startimes;
