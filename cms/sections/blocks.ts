import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import markdown from "../symbols/markdown";
import title from "../symbols/title";

const blocksSection = (name = "blocks"): CmsFieldObject & CmsFieldBase => ({
  label: "Blöcke",
  name: name,
  widget: "object",
  i18n: false,
  fields: [
    {
      label: "Blöcke",
      name: "blocks",
      widget: "list",
      i18n: false,
      types: [
        {
          label: "Text",
          name: "text",
          widget: "object",
          i18n: false,
          fields: [
            title,
            {
              label: "Zahlen",
              name: "numbers",
              widget: "select",
              multiple: true,
              required: false,
              options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "&"],
            },
            {
              label: "Untertitel",
              name: "subtitle",
              widget: "string",
              i18n: false,
            },
            markdown,
            {
              label: "CTA",
              name: "cta",
              i18n: false,
              widget: "object",
              required: false,
              fields: [
                {
                  label: "Text",
                  name: "text",
                  i18n: false,
                  required: false,
                  widget: "string",
                },
                {
                  label: "url",
                  name: "url",
                  i18n: false,
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
        {
          label: "Video",
          name: "video",
          widget: "object",
          i18n: false,
          fields: [
            title,
            { label: "Text", name: "text", widget: "string" },
            { label: "Video URL", name: "videoUrl", widget: "string" },
          ],
        },
        {
          label: "Fragebögen",
          name: "questionnaires",
          widget: "object",
          i18n: false,
          fields: [
            title,
            { label: "Text", name: "text", widget: "string" },
            { label: "Bild 1", name: "image1", widget: "image" },
            { label: "Bild 2", name: "image2", widget: "image" },
            { label: "PDF 1", name: "pdf1", widget: "file" },
            { label: "PDF 2", name: "pdf2", widget: "file" },
            { label: "Link 1 Text", name: "link1Text", widget: "string" },
            { label: "Link 2 Text", name: "link2Text", widget: "string" },
          ],
        },
      ],
    },
  ],
});

export default blocksSection;
