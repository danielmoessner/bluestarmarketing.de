import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import { internalLinkFields } from "cms/symbols/link";
import image from "cms/symbols/image";
import customersSection from "cms/symbols/customersSection";
import markdown from "cms/symbols/markdown";

const services: CmsCollectionFile = {
  file: "content/page/services.json",
  label: "Services",
  i18n: true,
  name: "services",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title,
        {
          label: "Links",
          name: "links",
          i18n: true,
          widget: "list",
          fields: internalLinkFields,
        },
        text,
        cta,
      ],
    },
    {
      label: "Services",
      name: "services",
      i18n: true,
      widget: "object",
      fields: [
        title,
        {
          label: "Services",
          name: "services",
          i18n: true,
          widget: "list",
          fields: [
            title,
            { label: "ID", name: "id", i18n: true, widget: "string" },
            {
              label: "Seite",
              name: "side",
              i18n: true,
              widget: "select",
              options: ["L", "R"],
            },
            markdown,
            {
              label: "Zitat",
              name: "quote",
              i18n: true,
              widget: "string",
              required: false,
            },
            image,
            cta,
            {
              label: "Balkenfarbe",
              name: "color",
              i18n: true,
              widget: "string",
            },
          ],
        },
      ],
    },
    customersSection,
  ],
};

export default services;
