import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";

const meeting: CmsCollection = {
  name: "meeting",
  label: "Termine",
  label_singular: "Termin",
  editor: {
    preview: false,
  },
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  extension: "json",
  slug: "{{fields.title}}",
  folder: "content/meeting",
  create: true,
  fields: [
    {
      label: "Event",
      name: "event",
      widget: "relation",
      multiple: false,
      collection: "event",
      i18n: false,
      display_fields: ["title"],
      search_fields: ["title"],
      value_field: "slug",
    },
    title,
    {
      label: "Allgemein",
      name: "general",
      widget: "object",
      fields: [
        {
          label: "Tag",
          name: "day",
          widget: "datetime",
          time_format: false,
          format: "YYYY-MM-DD",
          i18n: "duplicate",
          date_format: "DD.MM.YYYY",
        },
        {
          label: "Von",
          name: "from",
          widget: "datetime",
          time_format: "HH:mm",
          format: "HH:mm",
          i18n: "duplicate",
          date_format: false,
        },
        {
          label: "Bis",
          name: "to",
          widget: "datetime",
          format: "HH:mm",
          i18n: "duplicate",
          time_format: "HH:mm",
          date_format: false,
        },
      ],
    },
    {
      label: "Listenansicht",
      name: "list",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Text",
          name: "markdown",
          i18n: true,
          widget: "markdown",
        },
      ],
    },
    {
      label: "Detailansicht",
      name: "detail",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Bild",
          name: "image",
          widget: "image",
          i18n: false,
          required: false,
        },
        {
          label: "Video",
          name: "video",
          widget: "file",
          i18n: false,
          required: false,
        },
        {
          label: "Bildnachweis",
          name: "imgCredits",
          widget: "string",
          i18n: true,
          required: false,
        },
        {
          label: "Markdown",
          name: "markdown",
          i18n: true,
          widget: "markdown",
          required: false,
        },
        {
          label: "Text",
          name: "text",
          widget: "text",
          i18n: true,
          required: false,
        },
      ],
    },
  ],
};

export default meeting;
