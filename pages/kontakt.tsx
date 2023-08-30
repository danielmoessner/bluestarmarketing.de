import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "@/components/Footer";
import Multiline from "@/components/Multiline";
import Animate from "@/components/Animate";
import { getSingleJson } from "@/lib/getContent";

function Page({ pageData, footerData, globalData }) {
  const page = pageData;
  const global = globalData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header position="bottom-right" header={page.header} />

      <section className="pt-16 pb-16 lg:pb-20" id="kontakt">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{page.start.title}</Heading>
            {/* <HeadingStar /> */}
          </div>
          <div className="mt-6 md:mt-10 lg:mt-16">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <Heading classes="!font-normal uppercase">
                    {page.benefits.title}
                  </Heading>
                  <div className="flex items-center space-x-3">
                    <p className="text-2xl font-bold">
                      {page.benefits.subtitle}
                    </p>
                    <span className="text-4xl lg:text-5xl font-rose">
                      {page.benefits.textrose}
                    </span>
                  </div>
                  <div className="mt-2 lg:mt-5">
                    <Multiline text={page.benefits.pretext} />
                  </div>
                  <ul className="mt-3 space-y-0.5">
                    {page.benefits.points.map((point) => (
                      <li key={point} className="flex items-center space-x-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/stern_klein.svg"
                          alt="Blue Star"
                          className="w-4 h-auto"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Multiline
                      text={page.benefits.aftertext}
                      className="font-bold"
                    />
                  </div>
                </div>
                <div>
                  <Multiline text={page.start.text} />
                  <div className="mt-8">
                    <h2 className="text-4xl lg:text-5xl font-rose">
                      {page.start.title2}
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {page.start.emailtext}
                        </h3>
                        <a
                          className="block mt-1"
                          href={`mailto:${global.email}`}
                        >
                          {global.email}
                        </a>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          {page.start.phonetext}
                        </h3>
                        <a className="block mt-1" href={`tel:${global.mobile}`}>
                          {global.mobile}
                        </a>
                        <a className="block mt-1" href={`tel:${global.phone}`}>
                          {global.phone}
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="flex mt-2 space-x-4">
                        <a
                          href={global.linkedin}
                          className="block"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="w-5 h-5"
                            src="/linkedin.png"
                            alt="LinkedIn Icon"
                          />
                        </a>
                        <a
                          href={global.whatsapp}
                          target="_blank"
                          className="block"
                          rel="noreferrer"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="w-5 h-5"
                            src="/whatsapp.png"
                            alt="WhatsApp Icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await renderContent(
    getSingleJson("page", "contact", locale),
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale),
  );
  const globalData = await renderContent(
    getSingleJson("setting", "global", locale),
  );

  return {
    props: {
      pageData,
      footerData,
      globalData,
    },
  };
}

export default Page;
