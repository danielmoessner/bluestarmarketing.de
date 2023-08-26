import { CmsCollection } from "decap-cms";

const legal: CmsCollection = {
  name: "legal",
  label: "Rechtliches",
  label_singular: "Rechtliches",
  extension: "md",
  editor: {
    preview: false,
  },
  folder: "content/legal",
  slug: "{{fields.slug}}",
  i18n: true,
  create: true,
  fields: [
    { label: "Titel", name: "title", i18n: true, widget: "string" },
    { label: "Slug", name: "slug", i18n: true, widget: "string" },
    { label: "Inhalt", name: "body", i18n: true, widget: "markdown" },
  ],
};

export default legal;
