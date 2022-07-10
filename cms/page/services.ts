import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import { internalLink } from "cms/symbols/link";
import image from "cms/symbols/image";

const services: CmsCollectionFile = {
  file: "content/page/services.json",
  label: "Services",
  name: "services",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title,
        {
          label: "Links",
          name: "links",
          widget: "list",
          field: internalLink,
        },
        text,
        cta,
      ],
    },
    {
      label: "Services",
      name: "services",
      widget: "object",
      fields: [
        title,
        {
          label: "Services",
          name: "services",
          widget: "list",
          fields: [
            title,
            { label: "ID", name: "id", widget: "string" },
            text,
            image,
            cta,
          ],
        },
      ],
    },
    {
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
    },
  ],
};

export default services;
