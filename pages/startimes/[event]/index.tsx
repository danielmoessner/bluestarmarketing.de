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
import RegisterForm from "@/components/RegisterForm";

function Page({ pageData, footerData, eventData, meetingsData }) {
  const meetings = meetingsData.filter(
    (m) => new Date() <= new Date(m.general.day)
  );
  const page = pageData;
  const event = eventData;
  const detail = event.pages.find((p) => p.type === "detail");

  const formMeetings = eventData.meetings;

  return (
    <Layout>
      <Seo meta={detail.meta} />
      <Header header={detail.header} />

      <section className="pt-8 pb-0 lg:pt-16 lg:pb-10">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{detail.title}</Heading>
          </div>
        </Container>
      </section>

      {detail.sections.map((section) => {
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
                      <Button>{section.cta.text}</Button>
                    </div>
                  </div>
                  <div className="">
                    <Image {...section.image} alt={section.title} />
                  </div>
                </div>
              </Container>
            </section>
          );
        if (section.type === "titleImage")
          return (
            <section key={section.title} className="py-8 lg:py-20">
              <Container layout="sm">
                <div className="flex justify-center">
                  <h2 className="mb-4 text-3xl md:text-5xl font-rose lg:mb-12">
                    {section.title}
                  </h2>
                </div>
                <div className="">
                  <Image {...section.image} alt={section.title} />
                </div>
              </Container>
            </section>
          );
        if (section.type === "titleImageButton")
          return (
            <section key={section.title} className="py-8 lg:py-20">
              <Container layout="sm">
                <div className="flex justify-center">
                  <h2 className="mb-4 text-3xl md:text-5xl font-rose lg:mb-14">
                    {section.title}
                  </h2>
                </div>
                <div className="">
                  <Image {...section.image} alt={section.title} />
                </div>
                <div className="flex justify-center mt-6 lg:mt-12">
                  <Button kind={section.cta.kind} href={section.cta.href}>
                    {section.cta.text}
                  </Button>
                </div>
              </Container>
            </section>
          );
        if (section.type === "titleTextImage")
          return (
            <section className="pt-12 pb-16 lg:pb-20">
              <Container layout="sm">
                <div className="">
                  <Animate>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h2 className="text-3xl md:text-5xl font-rose">
                          {section.title}
                        </h2>
                        <div className="mt-4 md:mt-6">
                          <Prose html={section.markdown.html} />
                        </div>
                      </div>
                      <div className="leading-[0px]">
                        <Image {...section.image} alt={section.title} />
                      </div>
                    </div>
                  </Animate>
                </div>
              </Container>
            </section>
          );
        if (section.type === "twoColumns")
          return (
            <section className="pt-16 pb-16">
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
          );
        if (section.type === "blocks")
          return (
            <section
              key="blocks"
              className="pb-12 pt-10 md:pt-16 bg-[url('/sternenhimmel.jpg')] bg-repeat"
            >
              <Container layout="sm">
                <div className="space-y-10">
                  {section.blocks.map((block) => (
                    <div
                      key={block.numbers.join("")}
                      className="px-4 py-4 bg-white lg:px-8 lg:py-5"
                    >
                      <div className="flex justify-center">
                        <h2
                          className={`flex items-center text-2xl lg:text-4xl font-medium ${
                            block.numbers.includes("&")
                              ? "text-bsm-pink"
                              : "text-bsm-purple"
                          } md:text-6-xl`}
                        >
                          {block.numbers.map((n, i) => (
                            <div key={n} className="flex items-center">
                              {i > 0 && <div className="mx-0.5">+</div>}
                              <div
                                className={`flex items-center justify-center w-6 h-6 text-base font-normal text-white rounded-full ${
                                  block.numbers.includes("&")
                                    ? "bg-bsm-pink"
                                    : "bg-bsm-purple"
                                }`}
                              >
                                <div>{n}</div>
                              </div>
                            </div>
                          ))}
                          <span className="ml-3">{block.title}</span>
                        </h2>
                      </div>
                      <div className="flex justify-center mt-5">
                        <div className="mb-4 text-3xl md:text-5xl font-rose">
                          {block.subtitle}
                        </div>
                      </div>
                      <div className="mt-8">
                        <Prose
                          html={block.markdown.html}
                          className="prose-h3:font-rose prose-h3:text-4xl prose-h3:font-normal first:prose-h3:mt-0"
                        />
                      </div>
                      {block.cta &&
                        block.cta.text &&
                        block.cta.url &&
                        block.cta.kind && (
                          <div className="flex justify-center mt-10">
                            <Button kind={block.cta.kind} href={block.cta.url}>
                              {block.cta.text}
                            </Button>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          );
        if (section.type === "form")
          return (
            <section
              key="form"
              className="py-16 bg-[url('/sternenregen.png')] bg-no-repeat bg-[left_60%_top_20%]"
              id="form"
            >
              <Container layout="sm">
                <RegisterForm
                  image={page.form.image}
                  eventTitle={event.title}
                  htmlText={event.register.markdownForm.html}
                  onText={page.form.on}
                  eventImage={event.image}
                  meetings={formMeetings}
                  submitText={page.form.button}
                  successText={page.form.successText}
                  requiredFieldsText={page.form.requiredFields}
                  fields={event.register.fields}
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
