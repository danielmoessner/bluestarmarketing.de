import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import fullCta from "../symbols/fullCta";
import markdown from "../symbols/markdown";

const propertiesEventsVideoButton = (): CmsFieldObject & CmsFieldBase => ({
  label: "Eigenschaften-Events-Video-Button",
  name: "propertiesEventsVideoButton",
  widget: "object",
  fields: [
    {
      label: "Eigenschaften",
      name: "properties",
      widget: "list",
      fields: [
        { label: "Titel", name: "title", widget: "string", required: false },
        markdown,
      ],
    },
    {
      label: "YouTube Video Code",
      name: "youtube",
      widget: "string",
      required: false,
      i18n: false,
    },
    {
      label: "Nächsten Termine Text",
      name: "nextEventsText",
      widget: "string",
      required: true,
      default: "Nächsten Termine",
      i18n: true,
    },
    fullCta,
  ],
});

export default propertiesEventsVideoButton;
