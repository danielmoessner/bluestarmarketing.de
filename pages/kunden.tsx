import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import Script from "next/script";
import pageSource from "../content/page/customers.json";
import Heading from "../components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";
import Animate from "../components/Animate";
import Image from "next/image";
import Multiline from "../components/Multiline";
import Button from "../components/Button";
import { allCustomers } from "contentlayer/generated";

// interface Props {
//   pageData: typeof pageSource;
//   footerData: typeof footerSource;
// }

function Page({ pageData, footerData, reviews }) {
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
                  <Image {...page.start.image} alt={page.start.title} />
                </div>
                <div>
                  <Multiline text={page.start.text} />
                  <div className="mt-6">
                    <span className="text-3xl uppercase">
                      {page.start.pretext}
                    </span>
                  </div>
                  <div className="mt-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold">
                        {page.start.aftertext}
                      </span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={page.start.textimage}
                        className="h-14"
                        alt={page.start.aftertext}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button href={page.start.cta.url}>{page.start.cta.text}</Button>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section className="pt-16 pb-32">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h2">{page.customers.title}</Heading>
          </div>
          <div className="mt-8">
            <div className="gap-8 -my-2 md:-my-4 columns-1 md:columns-2">
              {reviews.map((item) => {
                return (
                  <div
                    key={item.customer}
                    className="grid py-2 md:py-4 break-inside-avoid"
                  >
                    <Animate>
                      <div className="p-5 bg-bsm-ocean/10">
                        <h3 className="sr-only">{item.customer}</h3>
                        <p className="text-sm">{item.text}</p>
                        <div className="mt-4">
                          <span className="block font-bold">
                            {item.customer}
                          </span>
                          {item.company && (
                            <span className="block text-sm">
                              {item.company}
                            </span>
                          )}
                        </div>
                      </div>
                    </Animate>
                  </div>
                );
              })}
            </div>
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
  const reviews = allCustomers;

  return {
    props: {
      pageData,
      footerData,
      reviews,
    },
  };
}

export default Page;
