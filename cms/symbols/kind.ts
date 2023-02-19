import { CmsField } from "netlify-cms-core";

const kind: CmsField = {
  label: "Art",
  name: "kind",
  widget: "select",
  options: [
    { label: "Nachtblau", value: "blue" },
    { label: "Pink", value: "pink" },
    { label: "Dunkelviolett", value: "purple" },
  ],
  i18n: false,
};

export default kind;
