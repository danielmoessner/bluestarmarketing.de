import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "@/components/Footer";
import Animate from "@/components/Animate";
import Image from "next/image";
import Multiline from "@/components/Multiline";
import Button from "@/components/Button";
import { getAllJson, getSingleJson } from "lib/getContent";
import CustomerReview from "@/components/CustomerReview";

function Page({ pageData, footerData, reviews }) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />

      <Header header={page.header} />

      <section className="pt-16 pb-16 lg:pb-20" id="kontakt">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h1">{page.start.title}</Heading>
            {/* <HeadingStar /> */}
          </div>
          <div className="mt-6 md:mt-10 lg:mt-16">
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
                        src={page.start.textimage.src}
                        className="h-14"
                        alt={page.start.aftertext}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 lg:mt-10">
                <Button href={page.start.cta.url}>{page.start.cta.text}</Button>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section className="pt-8 pb-32">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h3" element="h2">
              {page.customers.title}
            </Heading>
          </div>
          <div className="mt-6 md:mt-10 lg:mt-16">
            <div className="-my-2 md:-my-4 columns-1 md:columns-2 md:gap-8">
              {reviews.map((item) => {
                return (
                  <CustomerReview
                    customer={item.customer}
                    key={item.customer}
                    company={item.company}
                    text={item.text}
                  />
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

export async function getStaticProps({ locale }) {
  const pageData = await renderContent(
    getSingleJson("page", "customers", locale),
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale),
  );

  const reviews1 = getAllJson("customer", locale);
  const reviews = reviews1.sort((a, b) => a.ordering - b.ordering);

  return {
    props: {
      pageData,
      footerData,
      reviews,
    },
  };
}

export default Page;
