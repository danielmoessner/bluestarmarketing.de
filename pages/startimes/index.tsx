import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson, getSingleJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Animate from "@/components/Animate";
import Prose from "@/components/Prose";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/date";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { getNextMeeting } from "@/lib/event";
import YoutubeVideo from "@/components/YoutubeVideo";

function Page({ pageData, footerData, events }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <section className="pt-12 pb-14 lg:pb-16">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{page.start.title}</Heading>
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
                            {listing.titleRose}{" "}
                          </span>
                          {listing.titleNormalAfter}
                        </h2>
                        <div className="grid gap-8 mt-8 lg:grid-cols-2">
                          <div>
                            {listing.markdown && (
                              <Prose html={listing.markdown.html} />
                            )}
                            {listing.properties.map((p) => (
                              <div key={p.title}>
                                <h3 className="mt-5 text-4xl font-rose">
                                  {p.title}
                                </h3>
                                <Prose html={p.markdown.html} />
                              </div>
                            ))}
                            {getNextMeeting(event) && (
                              <>
                                <h3 className="mt-5 text-4xl font-rose">
                                  {page.listing.next}
                                </h3>
                                <p>
                                  {formatDate(
                                    getNextMeeting(event).day,
                                    "full"
                                  )}
                                </p>
                              </>
                            )}
                          </div>
                          <div className="flex flex-col justify-between">
                            {listing.youtube && (
                              <div>
                                <YoutubeVideo videoId={listing.youtube} />
                              </div>
                            )}
                            {!listing.youtube && (
                              <div className="leading-[0px]">
                                <Carousel images={listing.images} />
                              </div>
                            )}
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

  const getOrderingOfEvent = (event) => {
    const listing = event.pages.find((p) => p.type === "listing");
    if (listing) return listing.ordering;
    return 0;
  };

  const events1 = getAllJson("event", locale);
  const events2 = events1.filter(
    (e) => e.pages.filter((p) => p.type === "listing").length
  );
  const events3 = await renderContent(events2);
  const events4 = events3.sort(
    (a, b) => getOrderingOfEvent(b) - getOrderingOfEvent(a)
  );

  return {
    props: {
      events: events4,
      pageData,
      footerData,
    },
  };
}

export default Page;
