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
      <section>
        <Container layout="sm">
          <div className="pt-8 pb-20 sm:pt-4 lg:pt-6">
            <div className="">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-6">
                {animals.map((animal, index) => (
                  <Animate key={animal.slug} delay={index % 3}>
                    <AnimalCard animal={animal} />
                  </Animate>
                ))}
              </div>
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
