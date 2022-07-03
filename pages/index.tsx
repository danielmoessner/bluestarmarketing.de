import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import Script from "next/script";
import home from "../content/page/home.json";
import Heading from "../components/Heading";

function Page() {
  const page = home;

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
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
    </Layout>
  );
}

export default Page;
