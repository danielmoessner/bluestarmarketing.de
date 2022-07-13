import { CmsCollection } from "netlify-cms-core";
import contact from "./contact";
import customers from "./customers";
import home from "./home";
import forYou from "./forYou";
import services from "./services";
import strategyworkshop from "./strategyworkshop";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [home, services, strategyworkshop, customers, contact, forYou],
};

export default config;
