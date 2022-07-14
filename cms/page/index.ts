import { CmsCollection } from "netlify-cms-core";
import contact from "./contact";
import customers from "./customers";
import home from "./home";
import forYou from "./forYou";
import services from "./services";
import strategyworkshop from "./strategyworkshop";
import marketingstrategy from "./marketingstrategy";
import salesmarketing from "./salesmarketing";
import marketingcampaign from "./marketingcampaign";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false,
  },
  files: [
    home,
    services,
    marketingcampaign,
    strategyworkshop,
    marketingstrategy,
    salesmarketing,
    customers,
    contact,
    forYou,
  ],
};

export default config;
