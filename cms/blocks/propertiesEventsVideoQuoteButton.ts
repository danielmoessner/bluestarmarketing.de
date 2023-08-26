import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import fullCta from "../symbols/fullCta";
import markdown from "../symbols/markdown";

const propertiesEventsVideoQuoteButton = (): CmsFieldObject & CmsFieldBase => ({
  label: "Eigenschaften-Events-Video-Zitat-Button",
  name: "propertiesEventsVideoQuoteButton",
  widget: "object",
  fields: [
    {
      label: "Eigenschaften",
      name: "properties",
      widget: "list",
      fields: [{ label: "Titel", name: "title", widget: "string" }, markdown],
    },
    {
      label: "YouTube Video Code",
      name: "youtube",
      widget: "string",
      required: false,
      i18n: false,
    },
    {
      label: "Quote",
      name: "quote",
      widget: "object",
      required: true,
      i18n: true,
      fields: [
        { label: "Text", name: "text", i18n: true, widget: "text" },
        { label: "Kunde", name: "customer", i18n: true, widget: "string" },
      ],
    },
    fullCta,
  ],
});

export default propertiesEventsVideoQuoteButton;
