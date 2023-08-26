import { CmsCollectionFile } from "decap-cms";

const rewrites: CmsCollectionFile = {
  file: "content/setting/rewrites.json",
  label: "Rewrites",
  i18n: {
    structure: "single_file",
    locales: ["de"],
  },
  name: "rewrites",
  fields: [
    {
      label: "Rewrites",
      name: "rewrites",
      i18n: false,
      widget: "list",
      collapsed: false,
      fields: [
        { label: "From", name: "from", widget: "string", i18n: "duplicate" },
        { label: "To", name: "to", widget: "string", i18n: false },
      ],
    },
  ],
};

export default rewrites;
