import title from "cms/symbols/title";
import { CmsCollection } from "decap-cms";

const article: CmsCollection = {
  name: "article",
  label: "Artikel",
  label_singular: "Artikel",
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  editor: {
    preview: false,
  },
  extension: "json",
  folder: "content/article",
  slug: "{{fields.slug}}",
  create: true,
  fields: [
    {
      label: "Bild",
      name: "image",
      widget: "image",
      hint: "Großes Bild",
    },
    {
      label: "Bildnachweis",
      name: "credit",
      widget: "string",
      required: false,
    },
    {
      label: "Preview Bild",
      name: "previewimage",
      widget: "image",
      hint: "Kleines Bild Quadrat",
    },
    title,
    { label: "Slug", name: "slug", i18n: true, widget: "string" },
    {
      label: "Datum",
      name: "date",
      i18n: "duplicate",
      widget: "datetime",
      time_format: false,
    },
    {
      label: "Kategorien",
      name: "categories",
      widget: "relation",
      multiple: true,
      collection: "category",
      search_fields: ["title"],
      value_field: "title",
    },
    {
      label: "Archiviert",
      name: "isArchived",
      widget: "boolean",
      required: false,
    },
    { label: "Auszug", name: "excerpt", i18n: true, widget: "text" },
    { label: "Inhalt", name: "markdown", i18n: true, widget: "markdown" },
  ],
};

export default article;
