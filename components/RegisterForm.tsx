import Image from "next/image";
import Prose from "@/components/Prose";
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
  meetings: { day: string; title: string }[];
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
}: Props) {
  console.log("here", meetings);
  const availableMeetings = meetings.filter(
    (m) => !m.day || new Date() <= new Date(m.day)
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
        label: m.title,
        name: `meeting_${eventTitle}_${m.title}`,
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
