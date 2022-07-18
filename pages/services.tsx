import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import Script from "next/script";
import pageSource from "../content/page/services.json";
import Heading from "../components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";
import Animate from "../components/Animate";
import Multiline from "../components/Multiline";
import Button from "../components/Button";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/outline";
import ServiceBox from "../components/ServiceBox";
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
            <Heading size="h1">{page.start.title}</Heading>
          </div>
          <div className="mt-16">
            <Animate>
              <div className="grid gap-8 lg:grid-cols-2">
                <ServiceLinks links={page.start.links} />
                <div>
                  <Multiline text={page.start.text} />
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

      <section className="relative py-16 bg-bsm-matt">
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute min-w-full min-h-full pt-20 pb-20"
            data-name="Ebene 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1791.95 4805.06"
          >
            <path
              d="M1791.95,4464.16c-360.12,347.12-883.8,387.03-1280.47,257.89-144.98-47.2-268.54-115.21-357.32-196.66-91.04-83.53-139.16-176.06-139.16-267.58,0-27.12,.18-49.5,.58-70.44,.47-24.81,1.23-47.15,2.32-68.29,1.23-23.83,2.87-45.76,4.99-67.03,2.25-22.55,5.1-44.49,8.46-65.2,3.59-22.09,7.93-43.8,12.89-64.51,5.21-21.74,11.33-43.28,18.17-64.01,7.13-21.58,15.32-43.1,24.35-63.94,9.35-21.59,19.92-43.23,31.43-64.32,11.86-21.74,25.12-43.66,39.42-65.13,14.68-22.05,30.94-44.38,48.33-66.37,17.79-22.5,37.36-45.38,58.15-68.01,21.22-23.09,44.39-46.66,68.89-70.05,24.93-23.81,52.03-48.2,80.54-72.49,46.5-39.62,96.35-78.83,152.39-119.89,14.65-10.73,29.93-21.73,45.4-32.69,53.08-37.58,108.92-75.04,170.71-114.52,55.26-35.31,112.58-70.5,175.21-107.59,55.74-33.01,114.78-66.88,180.49-103.56,65.71-36.67,131.58-72.85,181.63-100.27,58.77-32.2,118.78-60.62,183.43-86.89,39.06-15.87,79.41-32.6,122.05-50.62,26.2,24.96,53,50.5,80.39,76.59l.17,.16c.43,.38,36.13,32.54,86.54,89.89v-22.58c-43.93-48.9-74.55-76.7-76.44-78.4-25.64-24.42-50.87-48.47-75.6-72.03,17.63-7.48,35.66-15.18,54.16-23.13,32.84-14.12,65.55-28.35,97.88-42.59v-16.4c-34.27,15.12-68.95,30.23-103.81,45.21-20.57,8.84-40.57,17.38-60.07,25.63C957.32,2015.14,620.15,1690.55,443.93,1482.16c-187.6-221.86-195.51-317.7-209.87-491.7-12.79-154.98,12.73-380.46,206.96-574.52C650.62,206.52,1010.95,75.15,1511.98,25.48c102.23-10.13,195.74-12.92,279.96-8.39V2.08c-84.81-4.51-178.82-1.7-281.44,8.47C1005.93,60.57,642.54,193.4,430.42,405.33c-85.91,85.83-146.84,184.9-181.11,294.44-28.5,91.11-38.66,189.32-30.19,291.92,7.02,85.02,13.08,158.44,41.84,235.05,29.09,77.46,81.99,159.22,171.52,265.1,89.44,105.77,223.86,245.62,435.85,453.47,183.82,180.22,418.21,404.29,744.67,715.4-40.37,17.03-78.7,32.91-115.85,48-65.2,26.49-125.71,55.15-184.99,87.63-50.07,27.43-115.98,63.63-181.74,100.33-65.82,36.74-124.97,70.67-180.82,103.75-62.79,37.18-120.24,72.46-175.65,107.86-61.99,39.61-118.03,77.2-171.31,114.92-15.54,11-30.89,22.05-45.6,32.83-56.34,41.27-106.47,80.71-153.25,120.57-28.72,24.47-56.03,49.06-81.17,73.06-24.73,23.62-48.14,47.42-69.58,70.75-21.05,22.9-40.85,46.07-58.87,68.85-17.64,22.31-34.15,44.97-49.05,67.36-14.54,21.84-28.03,44.13-40.1,66.26-11.72,21.49-22.5,43.54-32.02,65.54-9.2,21.25-17.55,43.19-24.83,65.2-6.98,21.12-13.21,43.07-18.52,65.21-5.05,21.07-9.46,43.14-13.11,65.6-3.41,21.01-6.3,43.26-8.58,66.12-2.15,21.51-3.8,43.67-5.05,67.74-1.11,21.31-1.87,43.81-2.34,68.79-.4,21.04-.58,43.51-.58,70.72,0,95.84,49.8,192.19,144.02,278.64,90.35,82.9,215.81,152.01,362.81,199.88,113.69,37.01,233.76,59.35,356.89,66.39,27.58,1.58,55.05,2.36,82.39,2.36,103.18,0,204.46-11.21,302.05-33.48,134.47-30.69,259.33-81.97,371.09-152.41,61.74-38.91,119.43-83.69,172.7-133.95v-21.07Z"
              fill="#fff"
            />
          </svg>
        </div>
        <Container layout="sm">
          <div className="text-center">
            <Heading size="h2">{page.services.title}</Heading>
          </div>
          <div className="mt-20 space-y-10">
            {page.services.services.map((service) => (
              <div key={service.title}>
                <Animate>
                  <ServiceBox service={service} />
                </Animate>
              </div>
            ))}
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
            <Button href={page.customers.cta.url}>
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
