import { CmsCollectionFile } from "netlify-cms-core";

const global: CmsCollectionFile = {
  file: "content/setting/global.json",
  label: "Global",
  name: "global",
  fields: [
    { label: "Favicon", name: "favicon", widget: "image" },
    {
      label: "E-Mail",
      name: "email",
      widget: "string",
    },
    {
      label: "Handy",
      name: "mobile",
      widget: "string",
    },
    {
      label: "Festnetz",
      name: "phone",
      widget: "string",
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      widget: "string",
    },
    {
      label: "WhatsApp",
      name: "whatsapp",
      widget: "string",
    },
  ],
};

export default global;
