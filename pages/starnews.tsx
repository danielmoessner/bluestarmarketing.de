import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import pageSource from "../content/page/starnews.json";
import Heading from "../components/Heading";
import { renderContent } from "lib/renderContent";
import Footer from "../components/Footer";
import footerSource from "../content/setting/footer.json";
import Image from "next/image";
import Button from "../components/Button";
import { getAllJSON } from "lib/getMarkdown";

// interface Props {
//   pageData: typeof pageSource;
//   footerData: typeof footerSource;
// }

function Page({
  pageData,
  footerData,
  categoryData,
  articleData,
  mainArticleData,
}) {
  const page = pageData;

  return (
    <Layout>
      <Seo meta={page.meta} />
      <section className="py-16">
        <Container layout="sm">
          <div className="flex justify-center">
            <Heading element="h1" size="h1" showStar>
              {page.start.title}
            </Heading>
          </div>
          <div className="grid grid-cols-12 gap-8 mt-20">
            <div className="col-span-9">
              <article>
                <div>
                  <div className="leading-[0px]">
                    <Image {...page.start.image} alt="test" />
                  </div>
                  <h2 className="mt-10 text-5xl font-bold">
                    {mainArticleData.title}
                  </h2>
                  <div className="flex mt-3 space-x-2">
                    <span className="text-lg">
                      {new Date(mainArticleData.date).toLocaleDateString(
                        "de-de"
                      )}
                    </span>
                    {mainArticleData.categories.map((c) => (
                      <>
                        <span key={c}>|</span>
                        <span className="text-lg" key={c}>
                          {c}
                        </span>
                      </>
                    ))}
                  </div>
                  <div className="mt-5">
                    <p>{mainArticleData.excerpt}</p>
                  </div>
                  <div className="mt-5">
                    <Button>{page.start.button}</Button>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-span-3">
              <aside>
                <div>
                  <h2 className="text-4xl font-bold">
                    {page.aside.categories}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {categoryData.map((category) => (
                      <li key={category.title}>
                        <button>{category.title}</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-20">
                  <Image {...page.aside.image} alt="Aside Image" />
                  <h2 className="mt-5 font-bold">
                    {page.aside.title}
                    <span className="pl-1">
                      <svg
                        className="inline-block w-5 h-5"
                        data-name="Ebene 1"
                        version="1.1"
                        viewBox="0 0 15 14.35"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m15 5.16h-5.2c-1.24 3.7-3.06 5.39-4.72 7.21l2.81-2.04 4.39 3.19-1.68-5.16 4.39-3.19z"
                          fill="#00adea"
                        />
                        <path
                          d="m7.92 0-1.68 5.16h-5.43l4.39 3.2s-1.2 1.66-2.01 2.64c-0.97 1.15-3.19 3.35-3.19 3.35 4.3-1.98 8.19-6.59 9.56-9.31z"
                          fill="#0f4988"
                        />
                      </svg>
                    </span>
                  </h2>
                  <p className="mt-4">{page.aside.text}</p>
                  <div className="mt-5">
                    <Button href={page.aside.cta.url}>
                      {page.aside.cta.text}
                    </Button>
                  </div>
                </div>
              </aside>
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
  const categoryData = getAllJSON("category");
  const articleData = getAllJSON("article");
  const mainArticleData = articleData.find(
    (a) => a.slug === pageData.start.article
  );

  return {
    props: {
      categoryData,
      pageData,
      footerData,
      articleData,
      mainArticleData,
    },
  };
}

export default Page;
