import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";
import cta from "../symbols/cta";
import kind from "../symbols/kind";
import { internalLinkFields } from "../symbols/link";
import markdown from "../symbols/markdown";
import meta from "../symbols/meta";

const event: CmsCollection = {
  name: "event",
  label: "Events",
  label_singular: "Event",
  editor: {
    preview: false,
  },
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  extension: "json",
  folder: "content/event",
  slug: "{{fields.title}}",
  create: true,
  fields: [
    title,
    {
      label: "Slug",
      name: "slug",
      i18n: true,
      widget: "string",
      hint: "Bitte nicht mehr verändern. Ansonsten könnten Verknüpfungsfehler entstehen.",
    },
    {
      label: "Icon",
      name: "image",
      widget: "image",
    },
    {
      label: "Termine",
      name: "meetings",
      widget: "list",
      i18n: true,
      fields: [
        {
          label: "Titel",
          name: "title",
          widget: "string",
          i18n: true,
          required: true,
        },
        {
          label: "Tag",
          name: "day",
          widget: "datetime",
          time_format: false,
          format: "YYYY-MM-DD",
          i18n: "duplicate",
          date_format: "DD.MM.YYYY",
          required: false,
        },
      ],
    },
    {
      label: "Seiten",
      name: "pages",
      widget: "list",
      i18n: true,
      types: [
        {
          label: "Auflistung",
          name: "listing",
          widget: "object",
          i18n: true,
          fields: [
            {
              label: "Sortierung",
              name: "ordering",
              widget: "number",
              hint: "Die größte Nummer erscheint zuerst.",
            },
            { label: "Farbe", name: "color", widget: "string" },
            { label: "Bild", name: "image", widget: "image" },
            {
              label: "Bilder",
              name: "images",
              widget: "list",
              i18n: false,
              fields: [{ label: "Bild", name: "image", widget: "image" }],
            },
            {
              label: "Titel Normal Vorher",
              name: "titleNormal",
              widget: "string",
              i18n: true,
              required: false,
            },
            {
              label: "Titel Rose",
              name: "titleRose",
              widget: "string",
              i18n: true,
              required: false,
            },
            {
              label: "Titel Normal Nachher",
              name: "titleNormalAfter",
              widget: "string",
              i18n: true,
              required: false,
            },
            markdown,
            {
              label: "Eigenschaften",
              name: "properties",
              widget: "list",
              fields: [
                { label: "Titel", name: "title", widget: "string" },
                markdown,
              ],
            },
          ],
        },
        {
          label: "Detail",
          name: "detail",
          widget: "object",
          i18n: true,
          fields: [
            meta,
            {
              label: "Header",
              name: "header",
              widget: "object",
              fields: [{ label: "Bild", name: "image", widget: "image" }],
            },
            {
              label: "Titel",
              name: "title",
              widget: "string",
              i18n: true,
            },
            {
              label: "Sektionen",
              name: "sections",
              widget: "list",
              i18n: true,
              types: [
                {
                  label: "Titel-Text-Button-Bild",
                  name: "titleTextButtonImage",
                  widget: "object",
                  i18n: true,
                  fields: [
                    title,
                    markdown,
                    cta,
                    { label: "Bild", name: "image", widget: "image" },
                  ],
                },
                {
                  label: "Titel-Bild",
                  name: "titleImage",
                  widget: "object",
                  i18n: true,
                  fields: [
                    title,
                    { label: "Bild", name: "image", widget: "image" },
                  ],
                },
                {
                  label: "Titel-Bild-Button",
                  name: "titleImageButton",
                  widget: "object",
                  i18n: true,
                  fields: [
                    title,
                    { label: "Bild", name: "image", widget: "image" },
                    {
                      label: "CTA",
                      name: "cta",
                      i18n: true,
                      widget: "object",
                      fields: [...internalLinkFields, kind],
                    },
                  ],
                },
                {
                  label: "Titel-Text-Bild",
                  name: "titleTextImage",
                  widget: "object",
                  i18n: true,
                  fields: [
                    title,
                    markdown,
                    { label: "Bild", name: "image", widget: "image" },
                  ],
                },
                {
                  label: "Zwei-Spalten",
                  name: "twoColumns",
                  widget: "object",
                  i18n: true,
                  fields: [
                    {
                      label: "Titel Links",
                      name: "titleLeft",
                      widget: "string",
                      i18n: true,
                    },
                    {
                      label: "Text Links",
                      name: "markdownLeft",
                      widget: "markdown",
                      i18n: true,
                    },
                    {
                      label: "Titel Rechts",
                      name: "titleRight",
                      widget: "string",
                      i18n: true,
                    },
                    {
                      label: "Text Rechts",
                      name: "markdownRight",
                      widget: "markdown",
                      i18n: true,
                    },
                  ],
                },
                {
                  label: "Termine",
                  name: "meetings",
                  widget: "object",
                  i18n: true,
                  fields: [title],
                },
                {
                  label: "Blöcke",
                  name: "blocks",
                  widget: "object",
                  i18n: true,
                  fields: [
                    {
                      label: "Blöcke",
                      name: "blocks",
                      widget: "list",
                      fields: [
                        title,
                        {
                          label: "Zahlen",
                          name: "numbers",
                          widget: "select",
                          multiple: true,
                          options: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "&",
                          ],
                        },
                        {
                          label: "Untertitel",
                          name: "subtitle",
                          widget: "string",
                          i18n: true,
                        },
                        markdown,
                        {
                          label: "CTA",
                          name: "cta",
                          i18n: true,
                          widget: "object",
                          required: false,
                          fields: [
                            {
                              label: "Text",
                              name: "text",
                              i18n: true,
                              required: false,
                              widget: "string",
                            },
                            {
                              label: "url",
                              name: "url",
                              i18n: true,
                              widget: "string",
                              required: false,
                              hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt",
                            },
                            {
                              label: "Art",
                              name: "kind",
                              widget: "select",
                              required: false,
                              options: [
                                { label: "Nachtblau", value: "blue" },
                                { label: "Pink", value: "pink" },
                                { label: "Dunkelviolett", value: "purple" },
                              ],
                              i18n: false,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Formular",
                  name: "form",
                  widget: "object",
                  i18n: false,
                  fields: [
                    {
                      label: "Platzhalter",
                      name: "placeholder",
                      widget: "hidden",
                      default: "---",
                      hint: "Eingabe wird ignoriert aus technischen Gründen notwenig.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Formular",
      name: "register",
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
          name: "successText",
          widget: "text",
          i18n: true,
        },
        {
          label: "Felder",
          name: "fields",
          i18n: true,
          required: true,
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string", i18n: true },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Typ",
              name: "type",
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
      ],
    },
  ],
};

export default event;
