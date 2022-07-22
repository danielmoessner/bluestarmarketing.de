import { CmsCollectionFile } from "netlify-cms-core";

const global: CmsCollectionFile = {
  file: "content/setting/global.json",
  label: "Global",
  name: "global",
  i18n: true,
  fields: [
    { label: "Favicon", name: "favicon", i18n: "translate", widget: "image" },
    {
      label: "E-Mail",
      name: "email",
      i18n: true,
      widget: "string",
    },
    {
      label: "Handy",
      name: "mobile",
      i18n: "translate",
      widget: "string",
    },
    {
      label: "Festnetz",
      name: "phone",
      i18n: "translate",
      widget: "string",
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      i18n: "translate",
      widget: "string",
    },
    {
      label: "WhatsApp",
      name: "whatsapp",
      i18n: "translate",
      widget: "string",
    },
  ],
};

export default global;
