import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";

const startimesmeetings: CmsCollectionFile = {
  file: "content/page/startimesmeetings.json",
  label: "Star Times Termine",
  name: "startimesmeetings",
  i18n: true,
  fields: [
    {
      label: "Termine",
      name: "meetings",
      i18n: true,
      widget: "object",
      fields: [title],
    },
  ],
};

export default startimesmeetings;
