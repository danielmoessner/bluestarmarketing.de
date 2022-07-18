import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import pageSource from "../content/page/salesmarketing.json";
import Heading from "../components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";
import Image from "next/image";
import Animate from "../components/Animate";
import Button from "../components/Button";
import Prose from "../components/Prose";

function Page({ pageData, footerData }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <section className="pt-16 pb-16 lg:pb-20" id="kontakt">
        <Container layout="sm">
          <div className="text-center">
            <Heading element="h1" size="h1">
              {page.start.title}
            </Heading>
            {/* <HeadingStar /> */}
          </div>
          <div className="mt-16">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <Prose html={page.start.markdown.html} />
                  <div className="mt-8">
                    <Button href={page.start.cta.url}>
                      {page.start.cta.text}
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="leading-[0px]">
                    <Image {...page.start.image} alt={page.start.title} />
                  </div>
                </div>
              </div>
            </Animate>
          </div>
          <div className="mt-12">
            <div
              className="max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: page.start.svg }}
            ></div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bsm-matt">
        <Container layout="sm">
          <div className="text-center">
            <Heading element="h2" size="h2">
              {page.travel.title}
            </Heading>
          </div>
          <div className="mt-12">
            <div
              className="max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: page.travel.svg }}
            ></div>
          </div>
          <div className="flex justify-center mt-12">
            <Button href={page.travel.cta.url}>{page.travel.cta.text}</Button>
          </div>
        </Container>
      </section>

      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await renderContent(pageSource);
  const footerData = await renderContent(footerSource);

  return {
    props: {
      pageData,
      footerData,
    },
  };
}

export default Page;
