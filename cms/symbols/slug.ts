import { CmsField } from "netlify-cms-core";

const slug = (slug): CmsField => ({
  label: "Slug",
  name: "slug",
  widget: "hidden",
  i18n: true,
  default: slug,
});

export default slug;
