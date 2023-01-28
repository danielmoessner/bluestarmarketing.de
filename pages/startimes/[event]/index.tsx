import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson, localizeJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import pageSource from "@/content/page/startimesmeetings.json";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Animate from "@/components/Animate";
import Image from "next/image";
import Prose from "@/components/Prose";
import Footer from "@/components/Footer";
import footerSource from "@/content/setting/footer.json";

function Page({ pageData, footerData, eventData }) {
  const page = pageData;
  const event = eventData;

  const meta = {
    title: event.title,
    description: "",
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <Header header={event.header} />

      {/* <section className="pt-16 pb-16 lg:pb-20">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{page.start.title1}</Heading>
          </div>
          <div className="mt-6 md:mt-10 lg:mt-20">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-5xl font-rose">{page.start.title2}</h2>
                  <div className="mt-12">
                    <Prose html={page.start.markdown.html} />
                  </div>
                </div>
                <div className="leading-[0px]">
                  <Image {...page.start.image} alt={page.start.titl2} />
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </section> */}

      {/* <section className="pb-12 pt-6 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat">
        <Container layout="sm">
          <div className="">
            <Animate></Animate>
          </div>
        </Container>
      </section> */}

      {/* <section className="py-12">
        <Container layout="sm">
          <p className="text-xs">{page.bottom.text}</p>
        </Container>
      </section> */}

      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps({ locale, params }) {
  const pageData = await renderContent(localizeJson(pageSource, locale));
  const footerData = await renderContent(footerSource[locale]);
  const { event } = params;

  const events = getAllJson("event", locale);
  // const meetings = getAllJson("meeting", locale);

  const foundEvent = events.find((e) => e.slug === event);
  // const foundMeeting = meetings.find(
  //   (m) => m.general.day.replaceAll("-", "") === meeting
  // );

  const eventData = await renderContent(foundEvent);

  return {
    props: {
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
