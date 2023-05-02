import { CmsCollectionFile } from "netlify-cms-core";
import blocksSection from "../sections/blocks";
import titleImageImageSection from "../sections/titleImageImage";
import coachingBookingSection from "../sections/coachingBooking";

const participantsonly: CmsCollectionFile = {
  file: "content/page/participantsonly.json",
  label: "Teilnehmeronly",
  i18n: true,
  name: "participantsonly",
  fields: [
    coachingBookingSection(),
    blocksSection("blocks1"),
    titleImageImageSection(),
    blocksSection("blocks2"),
  ],
};

export default participantsonly;