import { externalLinkFields, internalLinkFields } from "cms/symbols/link";
import {
  CmsCollectionFile,
  CmsFieldBase,
  CmsFieldObject,
} from "decap-cms";

const link: CmsFieldBase & CmsFieldObject = {
  label: "Interner Link",
  name: "link",
  i18n: true,
  widget: "object",
  fields: internalLinkFields,
  collapsed: false,
};

const text: CmsFieldBase & CmsFieldObject = {
  label: "Text",
  name: "text",
  i18n: true,
  widget: "object",
  fields: [{ label: "Text", name: "text", i18n: true, widget: "text" }],
};

const externalLink: CmsFieldBase & CmsFieldObject = {
  label: "Externer Link",
  name: "externalLink",
  i18n: true,
  widget: "object",
  fields: externalLinkFields,
  collapsed: false,
};

const footer: CmsCollectionFile = {
  file: "content/setting/footer.json",
  label: "Footer",
  name: "footer",
  i18n: true,
  fields: [
    {
      label: "Bilder",
      name: "images",
      i18n: true,
      widget: "list",
      collapsed: false,
      field: { label: "Bild", name: "image", i18n: true, widget: "image" },
    },

    {
      label: "Zeile 1",
      name: "row1",
      i18n: true,
      widget: "object",
      collapsed: false,
      fields: [
        { label: "Copyright", name: "copyright", i18n: true, widget: "string" },
        {
          label: "Inhalt",
          name: "content",
          i18n: true,
          widget: "list",
          types: [link, externalLink, text],
        },
      ],
    },
    {
      label: "Cookie-Button",
      name: "cookie",
      widget: "string",
      i18n: true,
    },
    {
      label: "Zeile 2",
      name: "row2",
      i18n: true,
      widget: "list",
      collapsed: false,
      types: [link, externalLink, text],
    },
  ],
};

export default footer;
