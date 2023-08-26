import { CmsField } from "decap-cms";
import { internalLinkFields } from "./link";

const fullCta: CmsField = {
  label: "CTA",
  name: "cta",
  i18n: false,
  widget: "object",
  required: false,
  fields: [
    ...internalLinkFields,
    {
      label: "Art",
      name: "kind",
      widget: "select",
      required: false,
      options: [
        { label: "Nachtblau", value: "blue" },
        { label: "Pink", value: "pink" },
        { label: "Dunkelviolett", value: "purple" },
        { label: "Ocean", value: "ocean" },
      ],
      i18n: false,
    },
  ],
};

export default fullCta;
