import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import cta from "../symbols/cta";

const threeCards = (): CmsFieldObject & CmsFieldBase => ({
  label: "Drei-Karten",
  name: "threeCards",
  widget: "object",
  i18n: true,
  fields: [
    {
      label: "Karten",
      name: "cards",
      widget: "list",
      fields: [
        { label: "Bild", name: "image", widget: "image" },
        {
          label: "Button Art",
          name: "buttonKind",
          widget: "select",
          options: ["ocean", "pink"],
        },
        cta,
        { label: "Padding (Expert)", name: "padding", widget: "string" },
      ],
    },
  ],
});

export default threeCards;
