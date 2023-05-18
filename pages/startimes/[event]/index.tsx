import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getAllJson, getSingleJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import Seo from "@/components/Seo";
import Animate from "@/components/Animate";
import Image from "next/image";
import Prose from "@/components/Prose";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/date";
import Button from "@/components/Button";
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

function Page({ pageData, footerData, eventData }) {
  const page = pageData;
  const event = eventData;
  const availableMeetings = getAvailableMeetings(event);
  const detail = event.pages.find((p) => p.type === "detail");
  const listableMeetings = availableMeetings.filter(
    (m) => m.addons && m.addons.find((a) => a.type === "listSection")
  );

  return (
    <Layout>
      <Seo meta={detail.meta} />

      {detail.sections.map((section) => {
        if (section.type === "header")
          return <SectionHeader key={section.title} section={section} />;

        if (section.type === "titleTextButtonImage")
          return (
            <section key={section.title} className="py-8 lg:py-16">
              <Container layout="sm">
                <div className="flex justify-center">
                  <h2 className="mb-4 text-3xl md:text-5xl font-rose lg:mb-8">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="flex flex-col justify-between">
                    <div className="">
                      <Prose html={section.markdown.html} />
                    </div>
                    <div className="">
                      <Button href={section.cta.url}>{section.cta.text}</Button>
                    </div>
                  </div>
                  <div className="">
                    <Image {...section.image} alt={section.title} />
                  </div>
                </div>
              </Container>
            </section>
          );

        if (section.type === "centerTitleTextVideo")
          return (
            <SectionTitleTextVideo key={section.title} section={section} />
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
            <section
              key={section.markdown.html.slice(0, 100)}
              className="pt-12 pb-16 lg:pb-20"
            >
              <Container layout="sm">
                <div className="">
                  <Animate>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="leading-[0px]">
                        <Image
                          {...section.image}
                          alt={section.markdown.html.slice(0, 100)}
                        />
                      </div>
                      <div className="">
                        <Prose html={section.markdown.html} />
                      </div>
                    </div>
                  </Animate>
                </div>
              </Container>
            </section>
          );

        if (section.type === "imagesText")
          return (
            <SectionImagesText
              key={section.markdown.html.slice(0, 100)}
              section={section}
            />
          );

        if (section.type === "titleTextVideo")
          return (
            <SectionTitleTextVideo key={section.title} section={section} />
          );

        if (section.type === "twoColumns")
          return (
            <section key={section.titleLeft} className="pt-16 pb-16">
              <Container layout="sm">
                <div className="grid gap-8 md:grid-cols-2">
                  <Animate>
                    <h2 className="text-5xl font-rose">{section.titleLeft}</h2>
                    <div className="mt-5">
                      <Prose html={section.markdownLeft.html} />
                    </div>
                  </Animate>
                  <Animate>
                    <h2 className="text-5xl font-rose">{section.titleRight}</h2>
                    <div className="mt-5">
                      <Prose html={section.markdownRight.html} />
                    </div>
                  </Animate>
                </div>
              </Container>
            </section>
          );

        if (section.type === "meetings")
          return (
            <section
              key="meetings"
              className="pb-12 pt-10 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat"
            >
              <Container layout="sm">
                <div className="">
                  <Animate>
                    <h2 className="mx-auto text-5xl text-center font-rose">
                      {page.meetings.title}
                    </h2>
                  </Animate>
                  <div className="grid gap-8 mt-6 md:mt-10 md:grid-cols-2">
                    {listableMeetings.map((meeting) => (
                      <Animate key={meeting.day}>
                        <div className="flex flex-col justify-between h-full p-5 bg-white">
                          <div>
                            <div className="flex justify-between">
                              <div className="w-24">
                                <Image {...event.image} alt={event.title} />
                              </div>
                              <div>
                                <p className="text-bsm-pink">
                                  {formatDate(meeting.day, "full")}
                                </p>
                                <p className="text-bsm-pink">
                                  {meeting.from}-{meeting.to}{" "}
                                  {page.meetings.time}
                                </p>
                              </div>
                            </div>
                            <div className="mt-5">
                              <Prose
                                html={
                                  meeting.addons.find(
                                    (a) => a.type === "listSection"
                                  ).markdown.html
                                }
                              />
                            </div>
                          </div>
                          <div className="flex justify-center pt-5">
                            <Button
                              kind="pink"
                              href={`/startimes/${
                                event.slug
                              }/${meeting.day.replaceAll("-", "")}`}
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
