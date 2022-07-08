import { CmsCollection } from "netlify-cms-core";

const customer: CmsCollection = {
  name: "customer",
  label: "Kundenstimmen",
  label_singular: "Kundenstimme",
  editor: {
    preview: false,
  },
  folder: "content/customer",
  slug: "{{fields.customer}}",
  create: true,
  fields: [
    { label: "Text", name: "text", widget: "text" },
    { label: "Kunde", name: "customer", widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
      widget: "string",
      required: false,
    },
  ],
};

export default customer;
