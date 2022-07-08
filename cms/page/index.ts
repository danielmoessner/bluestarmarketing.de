import { CmsCollection } from "netlify-cms-core";
import contact from "./contact";
import customers from "./customers";
import home from "./home";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [home, customers, contact],
};

export default config;
