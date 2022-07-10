import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import Script from "next/script";
import pageSource from "../content/page/services.json";
import Heading from "../components/Heading";
import { improveImages } from "lib/improveImages";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";
import Animate from "../components/Animate";
import Image from "next/image";
import Multiline from "../components/Multiline";
import Button from "../components/Button";

// interface Props {
//   pageData: typeof pageSource;
//   footerData: typeof footerSource;
// }

function Page({ pageData, footerData }) {
  const page = pageData;

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

      <Seo meta={page.meta} />

      <Header header={page.header} />

      <section className="pt-16 pb-16 lg:pb-20" id="kontakt">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{page.start.title}</Heading>
            {/* <HeadingStar /> */}
          </div>
          <div className="mt-16">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="leading-[0px]">
                  {/* <Image {...page.start.image} alt={page.start.title} /> */}
                </div>
                <div>
                  <Multiline text={page.start.text} />
                  <div className="mt-8">
                    <Button href={page.start.cta.href}>
                      {page.start.cta.text}
                    </Button>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section className="relative py-16 bg-bsm-matt">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h2">{page.services.title}</Heading>
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h2">{page.customers.title}</Heading>
          </div>
          <div className="mt-10">
            <Animate>
              <div className="px-20 py-8 bg-bsm-ocean/10">
                <Multiline text={page.customers.text} />
                <div className="mt-4">
                  <span className="font-bold">{page.customers.customer}</span>
                  {page.customers.company && (
                    <span className="">, {page.customers.company}</span>
                  )}
                </div>
              </div>
            </Animate>
          </div>
          <div className="flex justify-center mt-10">
            <Button href={page.customers.cta.href}>
              {page.customers.cta.text}
            </Button>
          </div>
        </Container>
      </section>

      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await improveImages(pageSource);
  const footerData = await improveImages(footerSource);

  return {
    props: {
      pageData,
      footerData,
    },
  };
}

export default Page;
