import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile, CmsField } from "netlify-cms-core";
import customersSection from "cms/symbols/customersSection";
import title from "cms/symbols/title";
import cta from "cms/symbols/cta";
import text from "cms/symbols/text";
import { internalLinkFields } from "cms/symbols/link";
import markdown from "cms/symbols/markdown";
import image from "cms/symbols/image";
import svg from "cms/symbols/svg";

const service = (n: number): CmsField => ({
  label: "Service",
  name: `service${n}`,
  widget: "object",
  fields: [title, text, cta],
});

const home: CmsCollectionFile = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title, text, cta, svg],
    },
    {
      label: "Wir sind",
      name: "about",
      widget: "object",
      fields: [
        { label: "Textbild", name: "textimage", widget: "image" },
        title,
        { label: "Untertitel", name: "subtitle", widget: "string" },
        markdown,
        cta,
        image,
      ],
    },
    {
      label: "Marketingreise",
      name: "travel",
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
      fields: [title, service(1), service(2), service(3)],
    },
    customersSection,
  ],
};

export default home;
