import { CmsField } from "decap-cms";
import cta from "./cta";
import text from "./text";
import title from "./title";

const customersSection: CmsField = {
  label: "Kunden",
  name: "customers",
  i18n: true,
  widget: "object",
  fields: [
    title,
    text,
    { label: "Kunde", name: "customer", i18n: true, widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
      i18n: true,
      widget: "string",
      required: false,
    },
    cta,
  ],
};

export default customersSection;
