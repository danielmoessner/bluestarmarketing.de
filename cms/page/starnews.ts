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
  i18n: true,
  fields: [
    meta,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title,
        image,
        {
          label: "Artikel",
          name: "article",
          i18n: true,
          widget: "relation",
          collection: "article",
          value_field: "slug",
          display_fields: ["title"],
          search_fields: ["title"],
        },
        {
          label: "Button",
          name: "button",
          i18n: true,
          widget: "string",
        },
        // is archived blog page
        // {
        //   label: "Archiviert",
        //   name: "is_archived",
        //   widget: "boolean",
        //   required: false,
        // },
      ],
    },
    {
      label: "Seite",
      name: "aside",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Titel Kategorien",
          name: "categories",
          i18n: true,
          widget: "string",
        },
        image,
        title,
        text,
        cta,
      ],
    },
  ],
};

export default starnews;
