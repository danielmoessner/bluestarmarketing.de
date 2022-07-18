import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import text from "cms/symbols/text";
import cta from "cms/symbols/cta";
import image from "cms/symbols/image";

const starnews: CmsCollectionFile = {
  file: "content/page/starnews.json",
  label: "Star News",
  name: "starnews",
  fields: [
    meta,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title,
        image,
        {
          label: "Artikel",
          name: "article",
          widget: "relation",
          collection: "article",
          value_field: "slug",
          display_fields: ["title"],
          search_fields: ["title"],
        },
        {
          label: "Button",
          name: "button",
          widget: "string",
        },
      ],
    },
    {
      label: "Seite",
      name: "aside",
      widget: "object",
      fields: [
        { label: "Titel Kategorien", name: "categories", widget: "string" },
        image,
        title,
        text,
        cta,
      ],
    },
  ],
};

export default starnews;
