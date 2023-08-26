import { CmsField } from "decap-cms";

const quoteFields: CmsField[] = [
  { label: "Text", name: "text", i18n: true, widget: "text" },
  { label: "Kunde", name: "customer", i18n: true, widget: "string" },
  {
    label: "Unternehmen",
    name: "company",
    i18n: true,
    widget: "string",
    required: false,
  },
];

export default quoteFields;
