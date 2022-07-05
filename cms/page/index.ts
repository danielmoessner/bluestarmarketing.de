import { CmsCollection } from "netlify-cms-core";
import contact from "./contact";
import home from "./home";
import styleguide from "./styleguide";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [home, styleguide, contact],
};

export default config;
