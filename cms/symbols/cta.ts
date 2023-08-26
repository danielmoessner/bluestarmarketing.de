import { CmsField } from "decap-cms";
import { internalLinkFields } from "./link";

const cta: CmsField = {
  label: "CTA",
  name: "cta",
  i18n: true,
  widget: "object",
  fields: internalLinkFields,
};

export default cta;
