import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import { internalLinkFields } from "cms/symbols/link";
import image from "cms/symbols/image";
import customersSection from "cms/symbols/customersSection";

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
          fields: internalLinkFields,
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
            {
              label: "Seite",
              name: "side",
              widget: "select",
              options: ["L", "R"],
            },
            text,
            image,
            cta,
          ],
        },
      ],
    },
    customersSection,
  ],
};

export default services;
