import image from "cms/symbols/image";
import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";

const article: CmsCollection = {
  name: "article",
  label: "Artikel",
  label_singular: "Artikel",
  editor: {
    preview: false,
  },
  extension: "json",
  folder: "content/article",
  slug: "{{fields.slug}}",
  create: true,
  fields: [
    image,
    { label: "Preview Bild", name: "previewimage", widget: "image" },
    title,
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Datum", name: "date", widget: "datetime", time_format: false },
    {
      label: "Kategorie",
      name: "categories",
      widget: "relation",
      multiple: true,
      collection: "category",
      search_fields: ["title"],
      value_field: "title",
    },
    { label: "Auszug", name: "excerpt", widget: "text" },
    { label: "Inhalt", name: "body", widget: "markdown" },
  ],
};

export default article;
