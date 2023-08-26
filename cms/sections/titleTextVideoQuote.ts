import { CmsFieldBase, CmsFieldObject } from "decap-cms";
import title from "../symbols/title";
import markdown from "../symbols/markdown";
import quoteFields from "../symbols/quote";

const titleTextVideoQuoteSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Titel-Text-Video-Zitat",
  name: "titleTextVideoQuote",
  widget: "object",
  i18n: true,
  fields: [
    title,
    markdown,
    { label: "YouTube Video Code", name: "video", widget: "string" },
    { label: "Quote", name: "quote", widget: "object", fields: quoteFields },
  ],
});

export default titleTextVideoQuoteSection;
