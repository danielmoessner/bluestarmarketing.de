import { CmsCollection } from "netlify-cms-core";
import footer from "./footer";
import global from "./global";
import navigation from "./navigation";
import rewrites from "./rewrites";

const setting: CmsCollection = {
  name: "setting",
  label: "Einstellungen",
  label_singular: "Einstellung",
  delete: false,
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  editor: {
    preview: false,
  },
  files: [global, navigation, footer, rewrites],
};

export default setting;
