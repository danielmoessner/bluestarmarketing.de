import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";

const category: CmsCollection = {
  name: "category",
  label: "Kategorien",
  label_singular: "Kategorie",
  extension: "json",
  editor: {
    preview: false,
  },
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  folder: "content/category",
  slug: "{{slug}}",
  create: true,
  fields: [
    title,
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      i18n: true,
    },
  ],
};

export default category;
