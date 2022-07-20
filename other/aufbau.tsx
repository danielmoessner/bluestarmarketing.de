import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import pageSource from "../content/page/home.json";
import Heading from "../components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";

// interface Props {
//   pageData: typeof pageSource;
//   footerData: typeof footerSource;
// }

function Page({ pageData, footerData }) {
  const page = pageData;

  return (
    <Layout hide>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section className="pt-16 pb-16 lg:pb-20" id="kontakt">
        <Container layout="sm">
          <div className="text-center">
            <Heading>Die Webseite befindet sich im Aufbau</Heading>
          </div>
          <div className="mx-auto mt-4 md:w-1/2">
            <div>
              <p className="text-lg text-center">
                Wir freuen uns, dich demnächst auf unserer neuen Seite begrüßen
                zu dürfen. Du erreichst uns unter{" "}
                <a className="underline" href="tel:+49 151 59 94 98 75">
                  +49 151 59 94 98 75
                </a>{" "}
                oder{" "}
                <a
                  className="underline"
                  href="mailto:kontakt@bluestarmarketing.de"
                >
                  kontakt@bluestarmarketing.de
                </a>
                {"."}
              </p>
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

  return {
    props: {
      pageData,
      footerData,
    },
  };
}

export default Page;
