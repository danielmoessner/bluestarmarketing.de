import { CmsFieldBase, CmsFieldObject } from "netlify-cms-core";
import cta from "../symbols/cta";
import image from "../symbols/image";
import markdown from "../symbols/markdown";

const coachingBookingSection = (): CmsFieldObject & CmsFieldBase => ({
  label: "Coaching Buchen",
  name: "coachingBooking",
  widget: "object",
  i18n: false,
  fields: [
    markdown,
    cta,
    image,
    { label: "Alt", name: "alt", widget: "string", required: false },
  ],
});

export default coachingBookingSection;
