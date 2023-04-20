import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson, getSingleJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import Heading from "@/components/Heading";
import Animate from "@/components/Animate";
import Image from "next/image";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/date";
import Seo from "@/components/Seo";
import RegisterForm from "@/components/RegisterForm";

function Page({
  eventData,
  meetingData,
  footerData,
  pageData,
  availableMeetingsData,
}) {
  const event = eventData;
  const page = pageData;
  const meeting = meetingData;
  const availableMeetings = availableMeetingsData.filter(
    (m) => new Date() <= new Date(m.general.day)
  );

  const formattedDate = formatDate(meeting.general.day, "full");

  const eventPage = event.pages.find((p) => p.type === "event");

  const formMeetings = availableMeetings.map((m) => ({
    day: m.general.day,
    title: `${event.title} ${page.form.on} ${formatDate(
      m.general.day,
      "short"
    )}`,
  }));

  const meta = {
    title: meeting.title,
    description: `${page.intro.meeting}: ${formattedDate} ${meeting.general.from} - ${meeting.general.to} Uhr`,
    image: event.image,
  };

  return (
    <Layout>
      <Seo meta={meta} />

      <section className="py-8 md:py-16">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{meeting.title}</Heading>
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-6 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat bg-center">
        <Container layout="sm">
          <div className="">
            <Animate>
              <div className="grid gap-8 md:grid-cols-2">
                {meeting.detail.image && (
                  <div className="leading-[0px]">
                    <Image
                      {...meeting.detail.image}
                      alt={meeting.detail.title}
                    />
                  </div>
                )}
                {meeting.detail.video && !meeting.detail.image && (
                  <div className="leading-[0px]">
                    <video className="w-full h-auto" controls>
                      <source src={meeting.detail.video} type="video/webm" />
                      {/* <source src="movie.ogg" type="video/ogg" /> */}
                      Your browser does not support the video tag. Ihr Browser
                      unterstützt das Video Format nicht.
                    </video>
                  </div>
                )}
                <div>
                  <div className="">
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
                <Button href="#form" kind="pink">
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

      {eventPage.sections.map((section) => {
        if (section.type === "form")
          return (
            <section
              key="form"
              className="py-16 bg-[url('/sternenregen.png')] bg-no-repeat bg-[left_60%_top_20%]"
              id="form"
            >
              <Container layout="sm">
                <RegisterForm
                  name="meetingform"
                  image={page.form.image}
                  eventTitle={event.title}
                  htmlText={event.form.markdownForm.html}
                  onText={page.form.on}
                  eventImage={event.image}
                  meetings={formMeetings}
                  submitText={page.form.button}
                  successText={event.form.successTextMarkdown.html}
                  requiredFieldsText={page.form.requiredFields}
                  fields={event.form.fields}
                  addons={event.form.addons}
                />
              </Container>
            </section>
          );
      })}

      {meeting.detail.imgCredits && (
        <section className="py-12">
          <Container layout="sm">
            <p className="text-xs">{meeting.detail.imgCredits}</p>
          </Container>
        </section>
      )}

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

  const pageData = await renderContent(
    getSingleJson("page", "startimesmeeting", locale)
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale)
  );

  const availableMeetingsData = meetings
    .filter((m) => m.event === event)
    .sort(
      (m1, m2) =>
        new Date(m1.general.day).getTime() - new Date(m2.general.day).getTime()
    );

  return {
    props: {
      availableMeetingsData,
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
