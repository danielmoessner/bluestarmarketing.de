import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";
import markdown from "../symbols/markdown";
import meta from "../symbols/meta";

const event: CmsCollection = {
  name: "event",
  label: "Events",
  label_singular: "Event",
  editor: {
    preview: false,
  },
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  extension: "json",
  folder: "content/event",
  slug: "{{fields.title}}",
  create: true,
  fields: [
    title,
    {
      label: "Slug",
      name: "slug",
      i18n: true,
      widget: "string",
      hint: "Bitte nicht mehr verändern. Ansonsten könnten Verknüpfungsfehler entstehen.",
    },
    {
      label: "Icon",
      name: "image",
      widget: "image",
    },
    {
      label: "Auflistung",
      name: "listing",
      widget: "object",
      i18n: true,
      fields: [
        { label: "Farbe", name: "color", widget: "string" },
        {
          label: "Titel Normal",
          name: "titleNormal",
          widget: "string",
          i18n: true,
        },
        {
          label: "Titel Rose",
          name: "titleRose",
          widget: "string",
          i18n: true,
        },
        markdown,
        { label: "Warum", name: "why", widget: "text", i18n: true },
        { label: "Für Wen?", name: "who", widget: "string", i18n: true },
      ],
    },
    meta,
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [{ label: "Bild", name: "image", widget: "image" }],
    },
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Titel 1",
          name: "title1",
          widget: "string",
          i18n: true,
        },
        {
          label: "Titel 2",
          name: "title2",
          widget: "string",
          i18n: true,
        },
        markdown,
        {
          label: "Bild",
          name: "image",
          widget: "image",
        },
      ],
    },
    {
      label: "Unten",
      name: "bottom",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Titel Links",
          name: "titleLeft",
          widget: "string",
          i18n: true,
        },
        {
          label: "Text Links",
          name: "markdownLeft",
          widget: "markdown",
          i18n: true,
        },
        {
          label: "Titel Rechts",
          name: "titleRight",
          widget: "string",
          i18n: true,
        },
        {
          label: "Text Rechts",
          name: "markdownRight",
          widget: "markdown",
          i18n: true,
        },
        // cta,
      ],
    },
    {
      label: "Anmeldeseite",
      name: "register",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Formulartext",
          name: "markdownForm",
          i18n: true,
          widget: "markdown",
          required: false,
        },
      ],
    },
  ],
};

export default event;
