import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import pageSource from "../content/page/home.json";
import Heading from "../components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";
import SectionCustomers from "../components/SectionCustomers";
import Animate from "../components/Animate";
import Multiline from "../components/Multiline";
import Button from "../components/Button";
import Prose from "../components/Prose";
import Image from "next/image";
import SmallBox from "../components/SmallBox";
import ServiceLinks from "../components/ServiceLinks";

// interface Props {
//   pageData: typeof pageSource;
//   footerData: typeof footerSource;
// }

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
                  <Multiline text={page.start.text} />
                  <div className="mt-8">
                    <Button href={page.start.cta.url}>
                      {page.start.cta.text}
                    </Button>
                  </div>
                </div>
                <div>
                  <div
                    className="max-w-full mx-auto"
                    dangerouslySetInnerHTML={{ __html: page.start.svg }}
                  ></div>
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section className="relative py-16 ">
        <Container layout="sm">
          <div className="relative grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center space-x-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={page.about.textimage.src}
                  className="h-14"
                  alt={page.about.subtitle}
                />
                <Heading size="h2">{page.about.title}</Heading>
              </div>
              <div className="mt-2">
                <p className="text-2xl font-bold">{page.about.subtitle}</p>
              </div>
              <div className="mt-8">
                <Prose html={page.about.markdown.html} />
              </div>
              <div className="mt-12">
                <Button href={page.about.cta.url}>{page.about.cta.text}</Button>
              </div>
            </div>
            <div>
              <Animate>
                <div className="leading-[0px]">
                  <Image {...page.about.image} alt={page.about.title} />
                </div>
              </Animate>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-16 pb-16 lg:pb-20" id="kontakt">
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h2" element="h2">
              {page.travel.title}
            </Heading>
          </div>
          <div className="mt-16">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <ServiceLinks links={page.travel.links} />
                <div>
                  <Multiline text={page.travel.text} />
                  <div className="mt-8">
                    <Button href={page.travel.cta.url}>
                      {page.travel.cta.text}
                    </Button>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </Container>
      </section>

      <section
        className="relative py-16 bg-no-repeat bg-cover bg-bsm-matt"
        // style={{ background: "url()" }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg
            className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto"
            data-name="Ebene 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1700.87 1461.48"
          >
            <path
              d="M1283.06,1083.26c-43.63-96.66-100.62-174.96-140.74-223.63-43.52-52.78-77.14-83.07-77.48-83.37l-.11-.1c-17.77-16.93-35.18-33.52-52.26-49.79-27.71,11.71-53.94,22.58-79.33,32.9-42.03,17.08-81.03,35.55-119.23,56.48-32.56,17.84-75.4,41.37-118.06,65.18-42.72,23.84-81.1,45.86-117.32,67.31-40.72,24.11-77.97,46.99-113.89,69.94-40.18,25.67-76.48,50.02-110.97,74.44-10.08,7.14-20.01,14.29-29.51,21.25-36.42,26.68-68.82,52.17-99.06,77.93-18.54,15.8-36.15,31.65-52.35,47.12-15.92,15.21-30.99,30.53-44.78,45.54-13.52,14.71-26.24,29.59-37.8,44.21-11.3,14.29-21.87,28.8-31.41,43.14-9.29,13.96-17.91,28.2-25.62,42.34-7.48,13.71-14.35,27.78-20.43,41.81-.72,1.67-1.44,3.34-2.14,5.02H1344.64c18.9-147.15-16.59-278.03-61.58-377.71Z"
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
            />
            <path
              fill="#fff"
              d="M1004.77,719.04c-26.23,11.07-51.15,21.39-75.31,31.2-42.38,17.22-81.71,35.85-120.25,56.96-32.57,17.85-75.44,41.39-118.13,65.21-42.79,23.88-81.24,45.94-117.54,67.44-40.81,24.17-78.16,47.1-114.17,70.11-40.31,25.76-76.74,50.19-111.35,74.7-10.13,7.17-20.1,14.35-29.64,21.34-36.61,26.82-69.2,52.46-99.62,78.37-18.68,15.92-36.43,31.89-52.76,47.49-16.07,15.35-31.29,30.82-45.23,45.99-13.68,14.89-26.56,29.95-38.27,44.76-11.47,14.5-22.19,29.23-31.88,43.79-9.45,14.19-18.22,28.68-26.07,43.07-7.62,13.97-14.62,28.3-20.81,42.6-1.28,2.95-2.52,5.92-3.74,8.9H10.55c.71-1.68,1.42-3.36,2.14-5.02,6.07-14.03,12.95-28.1,20.43-41.81,7.71-14.14,16.33-28.38,25.62-42.34,9.54-14.34,20.11-28.85,31.41-43.14,11.56-14.62,24.28-29.49,37.8-44.21,13.79-15.01,28.86-30.33,44.78-45.54,16.2-15.47,33.81-31.32,52.35-47.12,30.23-25.76,62.64-51.25,99.06-77.93,9.5-6.96,19.43-14.11,29.51-21.25,34.49-24.42,70.79-48.77,110.97-74.44,35.92-22.95,73.17-45.83,113.89-69.94,36.22-21.45,74.6-43.47,117.32-67.31,42.66-23.81,85.5-47.34,118.06-65.18,38.2-20.93,77.2-39.4,119.23-56.48,25.4-10.32,51.62-21.19,79.33-32.9,17.07,16.27,34.48,32.86,52.26,49.79l.11,.1c.33,.3,33.96,30.58,77.48,83.37,40.13,48.67,97.12,126.97,140.74,223.63,44.99,99.68,80.48,230.56,61.58,377.71h10.51c2.27-17.76,3.79-35.58,4.55-53.47,4.6-108.13-18.25-218.67-67.89-328.55-44.11-97.63-101.67-176.67-142.18-225.78-43.05-52.19-76.6-82.65-78.23-84.12-16.66-15.88-33.07-31.51-49.14-46.82,11.46-4.86,23.18-9.87,35.2-15.04,41.99-18.05,83.67-36.4,123.85-54.54,41.92-18.92,83.18-38.05,122.64-56.85,42.12-20.07,82.86-40.12,121.08-59.58,33.04-16.82,63.56-32.85,93.29-49,30.1-16.35,57.7-31.89,84.38-47.52,28.36-16.62,53.97-32.34,78.29-48.06,5.97-3.86,11.92-7.76,17.7-11.6,2.24-1.49,2.85-4.52,1.36-6.76-1.49-2.24-4.52-2.85-6.76-1.36-5.74,3.81-11.65,7.69-17.59,11.53-24.2,15.64-49.69,31.29-77.92,47.84-26.58,15.58-54.09,31.07-84.1,47.37-29.66,16.11-60.1,32.09-93.06,48.88-38.15,19.43-78.81,39.44-120.86,59.47-39.4,18.78-80.6,37.88-122.45,56.77-40.14,18.11-81.75,36.44-123.69,54.47-13.37,5.75-26.37,11.29-39.05,16.66C625.97,344.59,409.63,136.73,286.08,0h-13.16c121.09,135.27,328.95,335.09,731.86,719.04Z"
              stroke="#fff"
            />
          </svg>
        </div>
        <div className="relative">
          <Container layout="sm">
            <div className="text-center">
              <Heading size="h2" element="h2">
                {page.services.title}
              </Heading>
            </div>
            <div className="mt-20">
              <div className="grid gap-10 md:grid-cols-3">
                <SmallBox service={page.services.service1} />
                <SmallBox service={page.services.service2} />
                <SmallBox service={page.services.service3} />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <SectionCustomers customers={page.customers} />

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
