import meta from "../symbols/meta";
import { CmsCollectionFile } from "netlify-cms-core";
import title from "cms/symbols/title";
import cta from "cms/symbols/cta";
import image from "cms/symbols/image";
import headerSmall from "cms/symbols/headerSmall";
import svg from "cms/symbols/svg";
import markdown from "cms/symbols/markdown";

const marketingcampaign: CmsCollectionFile = {
  file: "content/page/marketingcampaign.json",
  label: "Marketingkampagnen",
  name: "marketingcampaign",
  i18n: true,
  fields: [
    meta,
    headerSmall,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title, markdown, image, svg, cta],
    },
    {
      label: "Reise",
      name: "travel",
      i18n: true,
      widget: "object",
      fields: [title, image, cta],
    },
  ],
};

export default marketingcampaign;
