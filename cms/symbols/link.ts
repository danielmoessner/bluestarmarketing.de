import { CmsField, CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

export const externalLinkFields: CmsField[] = [
  {
    label: "Text",
    i18n: true,
    name: "text",
    widget: "string",
  },
  {
    label: "url",
    i18n: true,
    name: "url",
    widget: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/",
  },
];

export const externalLink: CmsFieldBase & CmsFieldObject = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  i18n: true,
  fields: externalLinkFields,
  collapsed: false,
};

export const internalLinkFields: CmsField[] = [
  {
    label: "Text",
    name: "text",
    i18n: true,
    widget: "string",
  },
  {
    label: "url",
    name: "url",
    i18n: true,
    widget: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt",
  },
];

export const internalLink: CmsFieldBase & CmsFieldObject = {
  label: "Interner Link",
  name: "link",
  i18n: true,
  widget: "object",
  fields: internalLinkFields,
  collapsed: false,
};
