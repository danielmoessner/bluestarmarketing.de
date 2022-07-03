import Layout from "../components/Layout";
import AnimalCard from "../components/AnimalCard";
import Seo from "../components/Seo";
import Animate from "../components/Animate";
import Container from "../components/Container";
import Header from "../components/Header";
import Script from "next/script";
import { allAnimals, Animal } from "contentlayer/generated";
import home from "../content/page/home.json";
import { getPlaiceholder } from "plaiceholder";
import { BlurImage } from "types/shared";
import Heading from "../components/Heading";

interface Props {
  animals: (Animal & BlurImage)[];
}

function Page({ animals }: Props) {
  const page = home;

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Seo meta={page.meta} />
      <Header header={page.header} />
      <section className="pb-16" id="kontakt">
        <Container layout="sm">
          <div className="text-center">
            <Heading>Die Webseite befindet sich im Aufbau</Heading>
          </div>
          <div className="w-1/2 mx-auto mt-12">
            <div>
              <p className="text-lg text-center">
                Wir freuen uns, Sie demnächst auf unserer neuen Seite begrüßen
                zu dürfen. Wir sind weiterhin Montag bis Freitag für Sie da von
                8:00 Uhr bis 18:00 Uhr. Sie erreichen uns unter{" "}
                <a className="underline" href="tel:+49 (0) 811 54 17 195">
                  +49 (0) 811 54 17 195
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

export async function getStaticProps() {
  const animalsPromiseList = allAnimals.map(async (a) => {
    const { base64, img } = await getPlaiceholder(a.image);
    return { ...a, imageProps: { ...img, blurDataURL: base64 } };
  });
  const animalsList = await Promise.all(animalsPromiseList);

  return {
    props: {
      animals: animalsList,
    },
  };
}

export default Page;
