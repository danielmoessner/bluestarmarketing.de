import { CmsField } from "netlify-cms-core";
import cta from "./cta";
import text from "./text";
import title from "./title";

const customersSection: CmsField = {
  label: "Kunden",
  name: "customers",
  widget: "object",
  fields: [
    title,
    text,
    { label: "Kunde", name: "customer", widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
      widget: "string",
      required: false,
    },
    cta,
  ],
};

export default customersSection;
