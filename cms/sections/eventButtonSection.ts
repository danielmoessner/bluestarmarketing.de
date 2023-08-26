import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import cta from "../symbols/cta";

const eventButtonSection = (): CmsFieldObject & CmsFieldBase => ({
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
});

export default eventButtonSection;
