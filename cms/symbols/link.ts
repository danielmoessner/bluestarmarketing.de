import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";

const externalLinkFields = [
  {
    label: "Text",
    name: "text",
    type: "string",
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/",
  },
];

export const externalLink: CmsFieldBase & CmsFieldObject = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  fields: externalLinkFields,
  collapsed: false,
};

export const internalLinkFields = [
  {
    label: "Text",
    name: "text",
    type: "string",
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/",
  },
];

export const internalLink: CmsFieldBase & CmsFieldObject = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: internalLinkFields,
  collapsed: false,
};
