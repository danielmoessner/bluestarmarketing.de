import { CmsField } from "decap-cms";

const collection = (collection): CmsField => ({
  label: "Sammlung",
  name: "collection",
  widget: "hidden",
  default: collection,
});

export default collection;
