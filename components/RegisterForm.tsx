import Image from "next/image";
import Prose from "@/components/Prose";
import { formatDate } from "@/lib/date";
import DynamicForm from "@/components/Form";
import { useRouter } from "next/router";
import { ImageRendered } from "@/types/shared";

interface Props {
  fields: { label: string; name: string; required?: boolean; type: string }[];
  image: ImageRendered;
  htmlText: string;
  successText: string;
  requiredFieldsText: string;
  submitText: string;
  eventImage: ImageRendered;
  eventTitle: string;
  meetings: { general: { day: string }; event: string }[];
  onText: string;
}

function RegisterForm({
  fields,
  image,
  htmlText,
  successText,
  submitText,
  requiredFieldsText,
  eventImage,
  meetings,
  eventTitle,
  onText,
}: Props) {
  const availableMeetings = meetings.filter(
    (m) => new Date() <= new Date(m.general.day)
  );

  const { locale } = useRouter();

  const computedFields = [
    {
      label:
        locale === "de"
          ? "Für diese Termine melde ich mich an"
          : "I register for the following meetings",
      type: "multiple",
      name: "meetings",
      options: availableMeetings.map((m) => ({
        label: `${eventTitle} ${onText} ${formatDate(m.general.day, "short")}`,
        name: `meeting_${m.event}_${m.general.day}`,
        checked: false,
      })),
    },
    ...fields,
  ];

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image {...image} alt="Form Bild" />
        </div>
        <div className="md:col-span-6">
          <Image className="w-40" {...eventImage} alt="Event Icon" />
          <div className="mt-10">
            <Prose html={htmlText} />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <DynamicForm
          name="meetingform"
          fields={computedFields}
          submitText={submitText}
          successText={successText}
          requiredFieldsText={requiredFieldsText}
        />
      </div>
    </div>
  );
}

export default RegisterForm;
