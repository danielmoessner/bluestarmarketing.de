import { CmsField } from "decap-cms";
import image from "./image";
import title from "./title";

const form: CmsField = {
  label: "Formular",
  name: "form",
  i18n: true,
  widget: "object",
  fields: [
    {
      label: "Text",
      name: "markdownForm",
      i18n: true,
      widget: "markdown",
      required: false,
    },
    {
      label: "Erfolgstext",
      name: "successTextMarkdown",
      widget: "markdown",
      i18n: true,
    },
    {
      label: "Addons",
      name: "addons",
      widget: "list",
      required: false,
      i18n: true,
      types: [
        {
          label: "Frühbucher",
          name: "earlyBird",
          widget: "object",
          i18n: true,
          fields: [
            image,
            title,
            { label: "Links 1", name: "left1", widget: "string" },
            { label: "Links 2", name: "left2", widget: "string" },
            { label: "Rechts 1", name: "right1", widget: "string" },
            { label: "Rechts 2", name: "right2", widget: "string" },
          ],
        },
      ],
    },
    {
      label: "Felder",
      name: "fields",
      i18n: true,
      required: true,
      widget: "list",
      types: [
        {
          label: "Feld",
          name: "field",
          widget: "object",
          i18n: true,
          fields: [
            { label: "Label", name: "label", widget: "string", i18n: true },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Typ",
              name: "fieldType",
              widget: "select",
              default: "text",
              options: ["textarea", "email", "tel", "text", "checkbox"],
            },
            {
              label: "Benötigt",
              name: "required",
              widget: "boolean",
              required: false,
            },
          ],
        },
        {
          label: "Hinweis",
          name: "notice",
          widget: "object",
          i18n: true,
          fields: [
            { label: "Title", name: "title", widget: "string", i18n: true },
            { label: "Text", name: "text", widget: "text", i18n: true },
          ],
        },
      ],
    },
  ],
};

export default form;
