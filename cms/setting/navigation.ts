import { internalLinkFields } from "cms/symbols/link";
import {
  CmsCollectionFile,
  CmsFieldBase,
  CmsFieldObject,
} from "netlify-cms-core";

const link: CmsFieldBase & CmsFieldObject = {
  label: "Normales Item",
  name: "link",
  i18n: true,
  widget: "object",
  fields: internalLinkFields,
  collapsed: false,
};

const links: CmsFieldBase & CmsFieldObject = {
  label: "Dropdown Item",
  name: "links",
  i18n: true,
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      i18n: true,
      widget: "string",
    },
    {
      label: "Links",
      name: "links",
      i18n: true,
      widget: "list",
      fields: internalLinkFields,
    },
  ],
};

const navigation: CmsCollectionFile = {
  file: "content/setting/navigation.json",
  label: "Navigation",
  i18n: true,
  name: "navigation",
  fields: [
    {
      label: "Links",
      name: "links",
      i18n: true,
      widget: "list",
      collapsed: false,
      types: [link, links],
    },
  ],
};

export default navigation;
