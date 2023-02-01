import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson, getSingleJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Animate from "@/components/Animate";
import Image from "next/image";
import Prose from "@/components/Prose";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/date";
import Button from "@/components/Button";

function Page({ pageData, footerData, eventData, meetingsData }) {
  const meetings = meetingsData.filter(
    (m) => new Date() <= new Date(m.general.day)
  );
  const page = pageData;
  const event = eventData;

  return (
    <Layout>
      <Seo meta={event.meta} />
      <Header header={event.header} />

      <section className="pt-16 pb-16 lg:pb-20">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{event.start.title1}</Heading>
          </div>
          <div className="mt-14 md:mt-14 lg:mt-22">
            <Animate>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl md:text-5xl font-rose">
                    {event.start.title2}
                  </h2>
                  <div className="mt-4 md:mt-6">
                    <Prose html={event.start.markdown.html} />
                  </div>
                </div>
                <div className="leading-[0px]">
                  <Image {...event.start.image} alt={event.start.title2} />
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-10 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat">
        <Container layout="sm">
          <div className="">
            <Animate>
              <h2 className="mx-auto text-5xl text-center font-rose">
                {page.meetings.title}
              </h2>
            </Animate>
            <div className="grid gap-8 mt-6 md:mt-10 md:grid-cols-2">
              {meetings.map((meeting) => (
                <Animate key={meeting.general.day}>
                  <div className="flex flex-col justify-between h-full p-5 bg-white">
                    <div>
                      <div className="flex justify-between">
                        <div className="w-24">
                          <Image {...event.image} alt={event.title} />
                        </div>
                        <div>
                          <p className="text-bsm-pink">
                            {formatDate(meeting.general.day, "full")}
                          </p>
                          <p className="text-bsm-pink">
                            {meeting.general.from}-{meeting.general.to}{" "}
                            {page.meetings.time}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Prose html={meeting.list.markdown.html} />
                      </div>
                    </div>
                    <div className="flex justify-center pt-5">
                      <Button
                        kind="pink"
                        href={`/startimes/${
                          meeting.event
                        }/${meeting.general.day.replaceAll("-", "")}`}
                      >
                        {page.meetings.button}
                      </Button>
                    </div>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-16 pb-16">
        <Container layout="sm">
          <div className="grid gap-8 md:grid-cols-2">
            <Animate>
              <h2 className="text-5xl font-rose">{event.bottom.titleLeft}</h2>
              <div className="mt-5">
                <Prose html={event.bottom.markdownLeft.html} />
              </div>
            </Animate>
            <Animate>
              <h2 className="text-5xl font-rose">{event.bottom.titleRight}</h2>
              <div className="mt-5">
                <Prose html={event.bottom.markdownRight.html} />
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps({ locale, params }) {
  const pageData = await renderContent(
    getSingleJson("page", "startimesmeetings", locale)
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale)
  );
  const { event } = params;

  const events = getAllJson("event", locale);
  const meetings1 = getAllJson("meeting", locale);

  const foundEvent = events.find((e) => e.slug === event);
  const meetings2 = meetings1.filter((m) => m.event === event);
  const meetings3 = meetings2.sort(
    (m1, m2) =>
      new Date(m1.general.day).getTime() - new Date(m2.general.day).getTime()
  );
  const meetings4 = await renderContent(meetings3);

  const eventData = await renderContent(foundEvent);

  return {
    props: {
      meetingsData: meetings4,
      pageData,
      footerData,
      eventData,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const events = locales.map((locale) => getAllJson("event", locale)).flat();

  return {
    paths: events.map((e) => {
      return {
        params: {
          event: e.slug,
        },
        locale: e._locale,
      };
    }),
    fallback: false,
  };
}

export default Page;
