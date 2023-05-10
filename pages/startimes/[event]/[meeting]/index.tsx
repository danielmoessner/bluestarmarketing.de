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
import { getAvailableMeetings } from "@/lib/event";
import YoutubeVideo from "@/components/YoutubeVideo";

function Page({ eventData, meetingData, footerData, pageData }) {
  const event = eventData;
  const page = pageData;
  const meeting = meetingData;
  const availableMeetings = getAvailableMeetings(event);

  const formattedDate = formatDate(meeting.day, "full");

  const eventPage = event.pages.find((p) => p.type === "event");
  const detail = meeting.addons.find((a) => a.type === "detailView");

  const meta = {
    title: meeting.title,
    description: `${page.intro.meeting}: ${formattedDate} ${meeting.from} - ${meeting.to} Uhr`,
    image: event.image,
  };

  return (
    <Layout>
      <Seo meta={meta} />

      <section className="py-8 md:py-16">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1" element="h1">
              {meeting.title}
            </Heading>
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-6 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat bg-center">
        <Container layout="sm">
          <div className="">
            <Animate>
              <div className="grid gap-8 md:grid-cols-2">
                {detail.image && (
                  <div className="leading-[0px]">
                    <Image {...detail.image} alt={detail.title} />
                  </div>
                )}
                {detail.video && !detail.image && (
                  <div className="leading-[0px]">
                    <YoutubeVideo videoId={detail.video} />
                  </div>
                )}
                <div>
                  <div className="-mt-10">
                    <Prose html={detail.markdown?.html} />
                  </div>
                  <div className="flex items-center space-x-8">
                    <div>
                      <h2 className="pt-2 mt-5 text-4xl lg:pt-3 lg:text-5xl font-rose">
                        {page.intro.meeting}
                      </h2>
                      <p className="mt-2 font-bold">
                        {formattedDate} <br />
                        {meeting.from} - {meeting.to} Uhr
                      </p>
                    </div>
                    {detail.new && detail.new.title && detail.new.text && (
                      <div>
                        <h2 className="pt-2 mt-5 text-4xl lg:pt-3 lg:text-5xl font-rose">
                          {detail.new.title}
                        </h2>
                        <p className="max-w-xs mt-2 font-bold whitespace-pre-line">
                          {detail.new.text}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 lg:mt-10">
                <Button href="#form" kind="pink">
                  {page.intro.button}
                </Button>
              </div>
              <div className="max-w-3xl mx-auto text-center mt-14">
                <p className="text-3xl md:text-5xl font-rose">{detail.text}</p>
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
                  meetings={availableMeetings}
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

      {detail.imgCredits && (
        <section className="py-12">
          <Container layout="sm">
            <p className="text-xs">{detail.imgCredits}</p>
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

  const foundEvent = events.find((e) => e.slug === event);

  const foundMeeting = foundEvent.meetings.find(
    (m) => m.day.replaceAll("-", "") === meeting
  );

  const eventData = await renderContent(foundEvent);
  const meetingData = await renderContent(foundMeeting);

  const pageData = await renderContent(
    getSingleJson("page", "startimesmeeting", locale)
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale)
  );

  return {
    props: {
      eventData,
      pageData,
      meetingData,
      footerData,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const events = locales.map((locale) => getAllJson("event", locale)).flat();

  const meetings = [];
  events.forEach((e) => {
    e.meetings.forEach((m) => {
      if (
        m &&
        Object.keys(m).includes("addons") &&
        m.addons.length > 0 &&
        m.addons.find((a) => a.type === "detailView")
      )
        meetings.push({ ...m, event: e.slug });
    });
  });

  return {
    paths: meetings.map((m) => {
      return {
        params: {
          event: m.event,
          meeting: m.day.replaceAll("-", ""),
        },
        locale: m._locale,
      };
    }),
    fallback: false,
  };
}
