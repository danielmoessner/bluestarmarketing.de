import markdown from "cms/symbols/markdown";
import text from "cms/symbols/text";
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
  folder: "content/meeting",
  slug: "{{fields.header.title}}",
  create: true,
  fields: [
    {
      label: "Event",
      name: "event",
      widget: "relation",
      multiple: false,
      collection: "event",
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
        { label: "Icon", name: "image", widget: "image" },
        {
          label: "Tag",
          name: "day",
          widget: "datetime",
          time_format: false,
          format: "YYYYMMDD",
          date_format: "DD.MM.YYYY",
        },
        {
          label: "Von",
          name: "from",
          widget: "datetime",
          time_format: "HH:mm",
          format: "HH:mm",
          date_format: false,
        },
        {
          label: "Bis",
          name: "to",
          widget: "datetime",
          format: "HH:mm",
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
          name: "text",
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
        },
        title,
        markdown,
        text,
        {
          label: "Formulartext",
          name: "markdownForm",
          i18n: true,
          widget: "markdown",
        },
      ],
    },
  ],
};

export default meeting;
