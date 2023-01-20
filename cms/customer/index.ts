import { CmsCollection } from "netlify-cms-core";

const customer: CmsCollection = {
  name: "customer",
  label: "Kundenstimmen",
  label_singular: "Kundenstimme",
  editor: {
    preview: false,
  },
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  extension: "json",
  folder: "content/customer",
  slug: "{{fields.customer}}",
  create: true,
  fields: [
    { label: "Text", name: "text", i18n: true, widget: "text" },
    { label: "Kunde", name: "customer", i18n: true, widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
      i18n: true,
      widget: "string",
      required: false,
    },
    { label: "Reihenfolge", name: "ordering", i18n: true, widget: "number" },
  ],
};

export default customer;
