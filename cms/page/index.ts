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
import starnews from "./starnews";
import startimes from "./startimes";
import startimesmeetings from "./startimesmeetings";
import startimesmeeting from "./startimesmeeting";
import participantsonly from "./participantsonly";

const config: CmsCollection = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  i18n: {
    structure: "single_file",
    locales: ["de", "en"],
  },
  editor: {
    preview: false,
  },
  files: [
    home,
    services,
    strategyworkshop,
    marketingstrategy,
    salesmarketing,
    marketingcampaign,
    forYou,
    customers,
    starnews,
    startimes,
    startimesmeetings,
    startimesmeeting,
    participantsonly,
    contact,
  ],
};

export default config;
