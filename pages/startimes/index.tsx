import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson, getSingleJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import Seo from "@/components/Seo";
import Heading from "@/components/Heading";
import Animate from "@/components/Animate";
import Footer from "@/components/Footer";
import BlockHeadingManagementSalesMarketing from "@/components/BlockHeadingManagementSalesMarketing";
import BlockBoldCenterText from "@/components/BlockBoldCenterText";
import BlockMarkdownImagesButton from "@/components/BlockMarkdownImagesButton";
import BlockOldOne from "@/components/BlockOldOne";

function Page({ pageData, footerData, events }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />

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
                        {listing.content?.map((c) => {
                          if (c.type === "msmTitle")
                            return (
                              <BlockHeadingManagementSalesMarketing
                                key="msmTitle"
                                block={c}
                              />
                            );

                          if (c.type === "boldCenterText")
                            return (
                              <BlockBoldCenterText
                                key="boldCenterText"
                                block={c}
                              />
                            );

                          if (c.type === "markdownImagesButton")
                            return (
                              <BlockMarkdownImagesButton
                                key="markdownImagesButton"
                                block={c}
                              />
                            );

                          if (c.type === "blockOldOne")
                            return (
                              <BlockOldOne
                                key="blockOldOne"
                                block={c}
                                event={event}
                                page={page}
                              />
                            );
                        })}
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
