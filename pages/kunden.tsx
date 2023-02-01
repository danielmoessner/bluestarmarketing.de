import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "../components/Footer";
import Animate from "../components/Animate";
import Image from "next/image";
import Multiline from "../components/Multiline";
import Button from "../components/Button";
import { getAllJson, getSingleJson } from "lib/getContent";

// interface Props {
//   pageData: typeof pageSource;
//   footerData: typeof footerSource;
// }

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
                  <div
                    key={item.customer}
                    className="grid py-4 md:py-4 break-inside-avoid"
                  >
                    <div className="relative">
                      <Animate>
                        <div className="absolute left-0 right-0 mx-auto -top-4 lg:-top-5">
                          <svg
                            id="a"
                            className="w-8 h-8 mx-auto opacity-85"
                            data-name="Ebene 1"
                            version="1.1"
                            viewBox="0 0 42.52 38.7"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m38.62 27.59c2.6-4.4 3.9-9.72 3.9-15.97 0-3.7-0.72-6.56-2.17-8.59-1.45-2.02-3.33-3.03-5.64-3.03-1.97 0-3.59 0.61-4.86 1.82-1.27 1.22-1.91 2.92-1.91 5.12s0.72 3.82 2.17 4.86 2.98 1.56 4.6 1.56c0.69 0 1.15-0.06 1.39-0.17 0 4.86-0.98 8.88-2.95 12.06s-4.86 6.33-8.68 9.46l3.12 3.99c4.74-3.01 8.42-6.71 11.02-11.11m-24.47 0c2.6-4.4 3.9-9.72 3.9-15.97 0-3.7-0.72-6.56-2.17-8.59-1.44-2.02-3.32-3.03-5.63-3.03-1.97 0-3.59 0.61-4.86 1.82-1.27 1.22-1.91 2.92-1.91 5.12s0.72 3.82 2.17 4.86c1.44 1.04 2.98 1.56 4.6 1.56 0.69 0 1.16-0.06 1.39-0.17 0 4.86-0.98 8.88-2.95 12.06s-4.86 6.34-8.68 9.46l3.12 3.99c4.74-3.01 8.42-6.71 11.02-11.11"
                              fill="#162259"
                            />
                          </svg>
                        </div>
                        <div className="p-5 bg-bsm-alice">
                          <h3 className="sr-only">{item.customer}</h3>
                          <p className="text-sm italic leading-normal">
                            {item.text}
                          </p>
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

export async function getStaticProps({ locale }) {
  const pageData = await renderContent(
    getSingleJson("page", "customers", locale)
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale)
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
