import title from "cms/symbols/title";
import { CmsCollection } from "netlify-cms-core";
import cta from "../symbols/cta";
import markdown from "../symbols/markdown";
import meta from "../symbols/meta";
import form from "../symbols/form";
import blocksSection from "../sections/blocks";
import formSection from "../sections/form";
import titleTextVideoSection from "../sections/titleTextVideo";
import imagesTextSection from "../sections/imagesText";
import titleImageButtonSection from "../sections/titleImageButton";
import titleTextButtonImageSection from "../sections/titleTextButtonImage";
import titleImageSection from "../sections/titleImage";
import titleSection from "../sections/title";
import headerSection from "../sections/header";
import imageTextSection from "../sections/imageText";
import titleTextImage from "../sections/titleTextImage";

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
        {
          label: "Von",
          name: "from",
          widget: "datetime",
          time_format: "HH:mm",
          format: "HH:mm",
          i18n: "duplicate",
          date_format: false,
          required: false,
        },
        {
          label: "Bis",
          name: "to",
          widget: "datetime",
          format: "HH:mm",
          i18n: "duplicate",
          time_format: "HH:mm",
          date_format: false,
          required: false,
        },
        {
          label: "Addons",
          name: "addons",
          widget: "list",
          i18n: true,
          types: [
            {
              label: "Listen-Sektion",
              name: "listSection",
              i18n: true,
              widget: "object",
              fields: [
                {
                  label: "Text",
                  name: "markdown",
                  i18n: true,
                  widget: "markdown",
                },
              ],
            },
            {
              label: "Detail-Ansicht",
              name: "detailView",
              i18n: true,
              widget: "object",
              fields: [
                {
                  label: "Bild",
                  name: "image",
                  widget: "image",
                  i18n: false,
                  required: false,
                },
                {
                  label: "YouTube Video Code",
                  name: "video",
                  widget: "string",
                  i18n: false,
                  required: false,
                },
                {
                  label: "Bildnachweis",
                  name: "imgCredits",
                  widget: "string",
                  i18n: true,
                  required: false,
                },
                {
                  label: "Markdown",
                  name: "markdown",
                  i18n: true,
                  widget: "markdown",
                  required: false,
                },
                {
                  label: "Text",
                  name: "text",
                  widget: "text",
                  i18n: true,
                  required: false,
                },
                {
                  label: "Neu",
                  name: "new",
                  widget: "object",
                  i18n: true,
                  required: false,
                  fields: [
                    {
                      label: "Titel",
                      name: "title",
                      widget: "string",
                      i18n: true,
                      required: false,
                    },
                    {
                      label: "Text",
                      name: "text",
                      widget: "text",
                      i18n: true,
                      required: false,
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
            {
              label: "Bilder",
              name: "images",
              widget: "list",
              i18n: false,
              field: { label: "Bild", name: "image", widget: "image" },
            },
            {
              label: "YouTube Video Code",
              name: "youtube",
              widget: "string",
              required: false,
              i18n: false,
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
            {
              label: "Markdown",
              name: "markdown",
              i18n: true,
              widget: "markdown",
              required: false,
            },
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
              label: "Sektionen",
              name: "sections",
              widget: "list",
              i18n: true,
              types: [
                titleSection(),
                headerSection(),
                {
                  label: "Event-Button",
                  name: "eventButton",
                  widget: "object",
                  i18n: true,
                  fields: [
                    {
                      label: "Nächster Termin",
                      name: "next",
                      widget: "string",
                    },
                    cta,
                  ],
                },
                titleTextButtonImageSection(),
                {
                  label: "Titel-Text-Termin-Button-Bild",
                  name: "titleTextEventButtonImage",
                  widget: "object",
                  i18n: true,
                  fields: [
                    title,
                    markdown,
                    {
                      label: "Nächster Termin",
                      name: "next",
                      widget: "string",
                    },
                    cta,
                    { label: "Bild", name: "image", widget: "image" },
                  ],
                },
                titleImageSection(),
                imageTextSection(),
                titleImageButtonSection(),
                titleTextImage(),
                {
                  label: "Zentriert-Titel-Text-Video",
                  name: "centerTitleTextVideo",
                  widget: "object",
                  i18n: true,
                  fields: [
                    title,
                    markdown,
                    {
                      label: "YouTube Video Code",
                      name: "video",
                      widget: "string",
                    },
                  ],
                },
                imagesTextSection(),
                titleTextVideoSection(),
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
                blocksSection(),
                formSection(),
              ],
            },
          ],
        },
        {
          label: "Event",
          name: "event",
          widget: "object",
          i18n: true,
          fields: [
            {
              label: "Sektionen",
              name: "sections",
              widget: "list",
              i18n: true,
              types: [formSection()],
            },
          ],
        },
      ],
    },
    form,
  ],
};

export default event;
