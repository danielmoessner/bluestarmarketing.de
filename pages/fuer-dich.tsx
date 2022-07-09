import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import Header from "../components/Header";
import Script from "next/script";
import pageSource from "../content/page/forYou.json";
import Heading from "../components/Heading";
import { improveImages } from "lib/improveImages";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";
import Image from "next/image";
import Multiline from "../components/Multiline";
import DynamicForm from "../components/DynamicForm";
import globalSource from "../content/setting/global.json";
import Animate from "../components/Animate";
// interface Props {
//   pageData: typeof pageSource;
//   footerData: typeof footerSource;
// }

function Page({ pageData, footerData }) {
  const page = pageData;
  const global = globalSource;

  const fields = [
    {
      label: "Name",
      name: "name",
      required: true,
    },
    {
      label: "Unternehmen",
      name: "company",
      required: false,
    },
    {
      label: "E-Mail",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Telefon",
      name: "phone",
      type: "tel",
      required: false,
    },
    {
      label: "Nachricht",
      name: "message",
      element: "textarea",
      required: true,
      className: "sm:col-span-2",
      attrs: {
        rows: 7,
      },
    },
  ];

  return (
    <Layout>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Seo meta={page.meta} />
      <Header header={page.header} />

      <Footer data={footerData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await improveImages(pageSource);
  const footerData = await improveImages(footerSource);

  return {
    props: {
      pageData,
      footerData,
    },
  };
}

export default Page;
