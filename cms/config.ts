import page from "./page/index";
import category from "./category/index";
import setting from "./setting/index";
import legal from "./legal/index";
import { CmsConfig } from "netlify-cms-core";
import customer from "./customer";
import article from "./article";
import event from "./event";
import meeting from "./meeting";

const config: CmsConfig = {
  publish_mode: "editorial_workflow",
  // See https://www.netlifycms.org/docs/beta-features/#i18n-support
  i18n: {
    structure: "multiple_folders",
    locales: ["de", "en"],
    default_locale: "de",
  },
  // See https://www.netlifycms.org/docs/configuration-options/#backend
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/bluestarmarketing.de",
  },
  // See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
  local_backend: true,
  // See https://www.netlifycms.org/docs/configuration-options/#locale
  locale: "de",
  // See https://www.netlifycms.org/docs/configuration-options/#display-url
  display_url: "https://bluestarmarketing.de",
  // See https://www.netlifycms.org/docs/configuration-options/#site-url
  site_url: "https://bluestarmarketing.de",
  // See https://www.netlifycms.org/docs/configuration-options/#media-folder
  media_folder: "/public/media",
  // See https://www.netlifycms.org/docs/configuration-options/#public-folder
  public_folder: "/media",
  // See https://www.netlifycms.org/docs/beta-features/#manual-initialization
  load_config_file: false,
  // See https://www.netlifycms.org/docs/collection-types/
  collections: [
    page,
    event,
    meeting,
    article,
    category,
    customer,
    setting,
    legal,
  ],
};

export default config;
