import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import footerSource from "@/content/setting/footer.json";
import Heading from "@/components/Heading";
import Animate from "@/components/Animate";
import Image from "next/image";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/date";
import DynamicForm from "@/components/Form";
import pageSource from "@/content/page/startimesmeeting.json";
import { useRouter } from "next/router";

function Page({
  eventData,
  meetingData,
  footerData,
  pageData,
  availableMeetings,
}) {
  const event = eventData;
  const page = pageData;
  const meeting = meetingData;

  const formattedDate = formatDate(meeting.general.day, "full");

  const { locale } = useRouter();

  const fields = [
    {
      label: locale === "de" ? "Termine" : "Days",
      type: "multiple",
      name: "meetings",
      options: availableMeetings.map((m) => ({
        label: `${m.title} - ${formatDate(m.general.day)}`,
        name: `meeting_${m.event}_${m.general.day}`,
        checked: m.general.day === meeting.general.day,
      })),
    },
    {
      label: locale === "de" ? "Andrede" : "Salutation",
      name: "salutation",
      required: true,
    },
    {
      label: locale === "de" ? "Titel" : "Title",
      name: "title",
      required: true,
    },
    {
      label: locale === "de" ? "Vorname" : "First name",
      name: "first_name",
      required: true,
    },
    {
      label: locale === "de" ? "Nachname" : "Last name",
      name: "last_name",
      required: true,
    },
    {
      label: locale === "de" ? "Unternehmen" : "Company",
      name: "company",
      required: true,
    },
    {
      label: "E-Mail",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: locale === "de" ? "Telefon" : "Phone",
      name: "phone",
      type: "tel",
      required: true,
    },
    {
      label:
        "Mit der Speicherung meiner Kontaktdaten zur Weiterverwendung bin ich einverstanden.",
      required: true,
      type: "checkbox",
      name: "storage_of_the_data",
    },
    {
      label: "Ich möchte Informationen zu Meet Magic Mates erhalten.",
      name: "receive_information",
      type: "checkbox",
      required: false,
    },
    {
      label: "Ich möchte die Star News erhalten.",
      name: "receive_starnews",
      required: false,
      type: "checkbox",
    },
  ];

  return (
    <Layout>
      <section className="py-8 md:py-16">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{meeting.title}</Heading>
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-6 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat">
        <Container layout="sm">
          <div className="">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="leading-[0px]">
                  <Image {...meeting.detail.image} alt={meeting.detail.title} />
                </div>
                <div>
                  <h2 className="pt-2 text-4xl lg:pt-3 lg:text-5xl font-rose">
                    {meeting.detail.title}
                  </h2>
                  <div className="mt-8">
                    <Prose html={meeting.detail.markdown.html} />
                  </div>
                  <h2 className="pt-2 mt-5 text-4xl lg:pt-3 lg:text-5xl font-rose">
                    {page.intro.meeting}
                  </h2>
                  <p className="mt-2 font-bold">
                    {formattedDate} <br />
                    {meeting.general.from} - {meeting.general.to} Uhr
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-6 lg:mt-10">
                <Button href="#" kind="pink">
                  {page.intro.button}
                </Button>
              </div>
              <div className="max-w-3xl mx-auto text-center mt-14">
                <p className="text-3xl md:text-5xl font-rose">
                  {meeting.detail.text}
                </p>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container layout="sm">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Image {...page.form.image} alt={meeting.detail.title} />
            </div>
            <div className="md:col-span-6">
              <Image className="w-40" {...event.image} alt={meeting.event} />
              <div className="mt-5">
                <Prose html={meeting.detail.markdownForm.html} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <DynamicForm
              fields={fields}
              submitText={page.form.button}
              successText={page.form.successText}
              requiredFieldsText={page.form.requiredFields}
            />
          </div>
        </Container>
      </section>

      <Footer data={footerData} />
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params, locale }) {
  const { event, meeting } = params;

  const events = getAllJson("event", locale);
  const meetings = getAllJson("meeting", locale);

  const foundEvent = events.find((e) => e.slug === event);
  const foundMeeting = meetings.find(
    (m) => m.general.day.replaceAll("-", "") === meeting
  );

  const eventData = await renderContent(foundEvent);
  const meetingData = await renderContent(foundMeeting);

  const pageData = await renderContent(pageSource[locale]);
  const footerData = await renderContent(footerSource[locale]);

  const availableMeetings = meetings
    .filter((m) => m.event === event)
    .filter((m) => new Date() <= new Date(m.general.day))
    .sort(
      (m1, m2) =>
        new Date(m1.general.day).getTime() - new Date(m2.general.day).getTime()
    );

  return {
    props: {
      availableMeetings,
      eventData,
      pageData,
      meetingData,
      footerData,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const meetings = locales
    .map((locale) => getAllJson("meeting", locale))
    .flat();

  return {
    paths: meetings.map((m) => {
      return {
        params: {
          event: m.event,
          meeting: m.general.day.replaceAll("-", ""),
        },
        locale: m._locale,
      };
    }),
    fallback: false,
  };
}