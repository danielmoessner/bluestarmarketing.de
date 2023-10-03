import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson, getSingleJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";
import SectionTitleTextImage from "@/components/SectionTitleTextImage";
import { getAvailableMeetings } from "@/lib/event";
import SectionTitleImage from "@/components/SectionTitleImage";
import SectionBlocks from "@/components/SectionBlocks";
import SectionTitleTextVideo from "@/components/SectionTitleTextVideo";
import SectionImagesText from "@/components/SectionImagesText";
import SectionHeader from "@/components/SectionHeader";
import SectionTitleImageButton from "@/components/SectionTitleImageButton";
import SectionEventButton from "@/components/SectionEventButton";
import SectionTitle from "@/components/SectionTitle";
import SectionImageText from "@/components/SectionImageText";
import SectionTitleTextButtonImage from "@/components/SectionTitleTextButtonImage";
import SectionTwoColumns from "@/components/SectionTwoColumns";
import SectionMeetings from "@/components/SectionMeetings";
import SectionCenterTitleTextVideo from "@/components/SectionCenterTitleTextVideo";
import SectionTitleTextVideoQuote from "@/components/SectionTitleTextVideoQuote";
import SectionTextVideo from "@/components/SectionTextVideo";

function Page({ pageData, footerData, eventData }) {
  const page = pageData;
  const event = eventData;
  const availableMeetings = getAvailableMeetings(event);
  const detail = event.pages.find((p) => p.type === "detail");
  const listableMeetings = availableMeetings.filter(
    (m) => m.addons && m.addons.find((a) => a.type === "listSection"),
  );

  return (
    <Layout>
      <Seo meta={detail.meta} />

      {detail.sections.map((section) => {
        if (section.type === "header")
          return <SectionHeader key={section.title} section={section} />;

        if (section.type === "title")
          return <SectionTitle key={section.title} section={section} />;

        if (section.type === "textVideo")
          return <SectionTextVideo key={section.title} section={section} />;

        if (section.type === "titleTextButtonImage")
          return (
            <SectionTitleTextButtonImage
              section={section}
              key={section.title}
            />
          );

        if (section.type === "centerTitleTextVideo")
          return (
            <SectionCenterTitleTextVideo
              key={section.title}
              section={section}
            />
          );

        if (section.type === "titleTextVideoQuote")
          return (
            <SectionTitleTextVideoQuote key={section.title} section={section} />
          );

        if (section.type === "titleTextImage")
          return (
            <SectionTitleTextImage key={section.title} section={section} />
          );

        if (section.type === "eventButton")
          return (
            <SectionEventButton
              section={section}
              event={event}
              key={section.next}
            />
          );

        if (section.type === "imageText")
          return (
            <SectionImageText
              key={section.markdown.html.slice(0, 100)}
              section={section}
            />
          );

        if (section.type === "imagesText")
          return (
            <SectionImagesText
              key={section.markdown.html.slice(0, 100)}
              section={section}
            />
          );

        if (section.type === "titleTextVideo")
          return <SectionTextVideo key={section.title} section={section} />;

        if (section.type === "twoColumns")
          return (
            <SectionTwoColumns key={section.titleLeft} section={section} />
          );

        if (section.type === "meetings")
          return (
            <SectionMeetings
              key="meetings"
              meetingsTitle={page.meetings.title}
              meetingsButton={page.meetings.button}
              meetingsTime={page.meetings.time}
              meetingsImage={event.image}
              meetingsImageAlt={event.title}
              meetings={listableMeetings}
              eventSlug={event.slug}
            />
          );

        if (section.type === "titleImageButton")
          return (
            <SectionTitleImageButton key={section.title} section={section} />
          );

        if (section.type === "titleImage")
          return <SectionTitleImage key={section.title} section={section} />;

        if (section.type === "blocks")
          return <SectionBlocks section={section} key="blocks" />;

        if (section.type === "form")
          return (
            <section
              key="form"
              className="py-16 bg-[url('/sternenregen.png')] bg-no-repeat bg-[left_60%_top_20%]"
              id="form"
            >
              <Container layout="sm">
                <RegisterForm
                  name={`${event.title} Form`}
                  image={page.form.image}
                  eventTitle={event.title}
                  htmlText={event.form.markdownForm.html}
                  eventImage={event.image}
                  meetings={availableMeetings}
                  submitText={page.form.button}
                  successText={event.form.successTextMarkdown.html}
                  requiredFieldsText={page.form.requiredFields}
                  fields={event.form.fields}
                  addons={event.form.addons}
                  currentDay=""
                />
              </Container>
            </section>
          );
      })}
      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps({ locale, params }) {
  const pageData = await renderContent(
    getSingleJson("page", "startimesmeetings", locale),
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale),
  );
  const { event } = params;

  const events = getAllJson("event", locale);
  const foundEvent = events.find((e) => e.slug === event);

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
  const events = locales
    .map((locale) =>
      getAllJson("event", locale).filter((e) => {
        for (const page of e.pages) {
          if (page.type === "detail") return true;
        }
        return false;
      }),
    )
    .flat();

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
