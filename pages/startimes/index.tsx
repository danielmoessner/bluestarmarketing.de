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

function Page({ pageData, footerData, events, meetingsData }) {
  const page = pageData;
  const meetings = meetingsData.filter((m) => new Date() <= new Date(m.day));
  const nextMeeting = (event) => {
    return meetings.filter((m) => m.event === event.slug)[0];
  };

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <section className="pt-12 pb-16 lg:pb-20">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{page.start.title1}</Heading>
          </div>
          <div className="mt-6 md:mt-10 lg:mt-24">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="leading-[0px]">
                  <Image {...page.start.image} alt={page.start.title2} />
                </div>
                <div>
                  <h2 className="text-5xl font-rose">{page.start.title2}</h2>
                  <div className="mt-6">
                    <Prose html={page.start.markdown.html} />
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section className="pb-12 pt-6 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat">
        <Container layout="sm">
          <div className="space-y-10">
            {events.map((event) => {
              const listing = event.pages.find((i) => i.type === "listing");

              return (
                <div key={event.slug}>
                  <Animate>
                    <div className="bg-white">
                      <div
                        className="w-full h-6"
                        style={{ backgroundColor: listing.color }}
                      ></div>
                      <div className="px-6 py-8">
                        <h2 className="text-5xl text-center uppercase">
                          {listing.titleNormal}{" "}
                          <span className="normal-case font-rose">
                            {listing.titleRose}
                          </span>
                        </h2>
                        <div className="grid gap-8 mt-8 lg:grid-cols-2">
                          <div>
                            <Prose html={listing.markdown.html} />
                            <h3 className="mt-5 text-4xl font-rose">
                              {page.listing.why}
                            </h3>
                            <p>{listing.why}</p>
                            <h3 className="mt-5 text-4xl font-rose">
                              {page.listing.who}
                            </h3>
                            <p>{listing.who}</p>
                            {nextMeeting(event) && (
                              <>
                                <h3 className="mt-5 text-4xl font-rose">
                                  {page.listing.next}
                                </h3>
                                <p>
                                  {formatDate(nextMeeting(event).day, "full")}
                                </p>
                              </>
                            )}
                          </div>
                          <div className="flex flex-col justify-between">
                            <div className="leading-[0px]">
                              <Image
                                {...event.header.image}
                                alt={listing.titleRose}
                              />
                            </div>
                            <div className="flex justify-center mt-6 md:justify-start">
                              <Button
                                kind="pink"
                                href={`/startimes/${event.slug}/`}
                              >
                                {page.listing.button}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Animate>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container layout="sm">
          <p className="text-xs">{page.bottom.text}</p>
        </Container>
      </section>

      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await renderContent(
    getSingleJson("page", "startimes", locale)
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale)
  );

  const events1 = getAllJson("event", locale);
  const events2 = await renderContent(events1);

  const meetings1 = getAllJson("meeting", locale);
  const meetings2 = meetings1.map((m) => ({
    day: m.general.day,
    event: m.event,
  }));
  const meetings3 = meetings2.sort(
    (m1, m2) => new Date(m1.day).getTime() - new Date(m2.day).getTime()
  );

  return {
    props: {
      meetingsData: meetings3,
      events: events2,
      pageData,
      footerData,
    },
  };
}

export default Page;
