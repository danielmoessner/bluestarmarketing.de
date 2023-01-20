import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";

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
      i18n: true,
      hint: "Erscheint auf der Detailseite, auf der der ganze Artikel zu sehen ist.",
    },
    {
      label: "Bildnachweis",
      name: "credit",
      i18n: true,
      widget: "string",
      required: false,
    },
    {
      label: "Preview Bild",
      name: "previewimage",
      i18n: true,
      widget: "image",
      hint: "Erscheint auf der Starnews Seite, auf der alle Artikel sind als Preview.",
    },
    title,
    { label: "Slug", name: "slug", i18n: true, widget: "string" },
    {
      label: "Datum",
      name: "date",
      i18n: true,
      widget: "datetime",
      time_format: false,
    },
    {
      label: "Kategorien",
      name: "categories",
      i18n: true,
      widget: "relation",
      multiple: true,
      collection: "category",
      search_fields: ["title"],
      value_field: "title",
    },
    // is archived article
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
