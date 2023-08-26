import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "@/components/Footer";
import Image from "next/image";
import Animate from "@/components/Animate";
import Button from "@/components/Button";
import Prose from "@/components/Prose";
import { getSingleJson } from "@/lib/getContent";

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
          <div className="mt-4 md:mt-8 lg:mt-16">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <Prose html={page.start.markdown.html} />
                <div>
                  <div className="leading-[0px]">
                    <Image {...page.start.image} alt={page.start.title} />
                  </div>
                  <div className="mt-8">
                    <Button href={page.start.cta.url}>
                      {page.start.cta.text}
                    </Button>
                  </div>
                </div>
              </div>
            </Animate>
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
            <div className="max-w-3xl mx-auto">
              <Image {...page.travel.image} alt={page.travel.title} />
            </div>
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

export async function getStaticProps({ locale }) {
  const pageData = await renderContent(
    getSingleJson("page", "marketingstrategy", locale),
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale),
  );

  return {
    props: {
      pageData,
      footerData,
    },
  };
}

export default Page;
