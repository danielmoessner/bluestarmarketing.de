import Layout from "@/components/Layout";
import { getSingleJson } from "@/lib/getContent";
import { renderContent } from "@/lib/renderContent";
import Footer from "@/components/Footer";
import DivTitle from "@/components/DivTitle";
import DivRoseTitle from "@/components/DivRoseTitle";
import SectionImageImage from "@/components/SectionImageImage";
import SectionBlocks from "@/components/SectionBlocks";
import SectionTitleImageImage from "@/components/SectionTitleImageImage";
import Seo from "@/components/Seo";
import SectionCoachingBooking from "@/components/SectionCoachingBooking";

function Page({ footerData, images, pageData }) {
  const page = pageData;

  const meta = {
    title: "Teilnehmeronly",
    description: "",
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <DivTitle
        section={{ title: "Aus Kopf & Herz in deine Hände", padding: "py-12" }}
      />
      <DivRoseTitle
        section={{
          title:
            "Wie schön, dass du dabei bist!\nIch lade dich herzlich zu den Vorbereitungen ein",
          padding: "pb-12",
        }}
      />
      <SectionImageImage
        section={{
          image1: images.image1,
          image1Alt: "Aus Kopf und Herz Grafik Teil 1",
          image2: images.image2,
          image2Alt: "Aus Kopf und Herz Zeitstrahl Teil 1",
        }}
      />
      <SectionCoachingBooking section={page.coachingBooking} />
      <SectionBlocks section={page.blocks1} />
      <SectionTitleImageImage section={page.titleImageImage} padding="py-20" />
      <SectionBlocks section={page.blocks2} />
      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await renderContent(
    getSingleJson("page", "participantsonly", locale),
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale),
  );
  const images1 = {
    image1: "/media/aus_kopf_und_herz_grafik_teil_1.png",
    image2: "/media/aus_kopf_und_herz_zeitstrahl_teil_1.png",
  };
  const images2 = await renderContent(images1);

  return {
    props: {
      pageData,
      footerData,
      images: images2,
    },
  };
}

export default Page;
