import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile, CmsField } from "decap-cms";
import customersSection from "cms/symbols/customersSection";
import title from "cms/symbols/title";
import cta from "cms/symbols/cta";
import text from "cms/symbols/text";
import { internalLinkFields } from "cms/symbols/link";
import markdown from "cms/symbols/markdown";
import image from "cms/symbols/image";

const service = (n: number): CmsField => ({
  label: "Service",
  name: `service${n}`,
  i18n: true,
  widget: "object",
  fields: [title, text, cta],
});

const home: CmsCollectionFile = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  i18n: true,
  fields: [
    meta,
    header,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title, text, cta, image],
    },
    {
      label: "Wir sind",
      name: "about",
      i18n: true,
      widget: "object",
      fields: [
        { label: "Textbild", name: "textimage", i18n: true, widget: "image" },
        title,
        { label: "Untertitel", name: "subtitle", i18n: true, widget: "string" },
        markdown,
        cta,
        image,
      ],
    },
    {
      label: "Marketingreise",
      name: "travel",
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
      fields: [title, service(1), service(2), service(3)],
    },
    customersSection,
  ],
};

export default home;
