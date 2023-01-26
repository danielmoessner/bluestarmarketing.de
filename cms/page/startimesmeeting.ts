import { CmsCollectionFile } from "netlify-cms-core";

const startimesmeeting: CmsCollectionFile = {
  file: "content/page/startimesmeeting.json",
  label: "Star Times Anmeldung",
  name: "startimesmeeting",
  i18n: true,
  fields: [
    {
      label: "Intro",
      name: "intro",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Wir treffen uns text",
          name: "meeting",
          widget: "string",
          i18n: true,
        },
        {
          label: "Button",
          name: "button",
          widget: "string",
          i18n: true,
        },
      ],
    },
    {
      label: "Formular",
      name: "form",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Bild",
          name: "image",
          widget: "image",
        },
        {
          label: "Erforderliche Felder",
          name: "requiredFields",
          widget: "string",
          i18n: true,
        },
        {
          label: "Button",
          name: "button",
          widget: "string",
          i18n: true,
        },
        {
          label: "Erfolgstext",
          name: "successText",
          widget: "text",
          i18n: true,
        },
      ],
    },
  ],
};

export default startimesmeeting;
