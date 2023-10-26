import Image from "next/image";
import Prose from "@/components/Prose";
import DynamicForm from "@/components/Form";
import { useRouter } from "next/router";
import { ImageRendered } from "@/types/shared";

type FormField =
  | { label: string; name: string; required?: boolean; type: string }
  | { type: "empty" };

interface Props {
  fields: FormField[];
  image: ImageRendered;
  htmlText: string;
  successText: string;
  requiredFieldsText: string;
  submitText: string;
  eventImage: ImageRendered;
  eventTitle: string;
  meetings: { day: string; title: string }[];
  name: string;
  currentDay: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addons?: any[];
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
  name,
  eventTitle,
  currentDay,
  addons = [],
}: Props) {
  const availableMeetings = meetings.filter(
    (m) => !m.day || new Date() <= new Date(m.day),
  );

  const { locale } = useRouter();

  const computedFields = [
    {
      label:
        locale === "de"
          ? "Für diese Termine melde ich mich an"
          : "I register for the following meetings",
      fieldType: "multiple",
      type: "field",
      name: "meetings",
      options: availableMeetings.map((m) => ({
        label: m.title,
        name: `meeting_${eventTitle}_${m.title}`,
        checked: m.day === currentDay,
      })),
    },
    ...fields,
  ];

  const earlyBird = addons.find((a) => a.type === "earlyBird");
  const second = addons.find((a) => a.type === "second");

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <Image {...image} alt="Form Bild" />
        </div>
        <div className="md:col-span-6">
          <Image className="w-40" {...eventImage} alt="Event Icon" />
          {second && (
            <div className="pt-6">
              <Image
                className="w-full h-auto"
                {...second.image}
                alt="Zweitbild"
              />
            </div>
          )}
          <div className="mt-10">
            <Prose html={htmlText} />
          </div>
          {earlyBird && (
            <div className="flex items-center mt-8 space-x-3">
              <div>
                <Image className="w-16" {...earlyBird.image} alt="Early Bird" />
              </div>

              <div>
                <p className="text-2xl font-bold text-bsm-purple">
                  {earlyBird.title}
                </p>
                <div className="flex items-center space-x-5">
                  <div className="text-bsm-purple">
                    <p className="text-lg font-bold text-bsm-purple">
                      {earlyBird.left1}
                    </p>
                    <p className="font-normal text-bsm-purple">
                      {earlyBird.left2}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{earlyBird.right1}</p>
                    <p className="font-normal">{earlyBird.right2}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10">
        <DynamicForm
          name={name}
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
