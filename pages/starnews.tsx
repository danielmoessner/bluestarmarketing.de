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
import Article from "../components/Article";
import BlogLayout from "../components/BlogLayout";
import ArticleMeta from "../components/ArticleMeta";
import { useRouter } from "next/router";

function Page({
  pageData,
  footerData,
  categoryData,
  articleData,
  mainArticleData,
}) {
  const page = pageData;

  let articles = articleData;
  const router = useRouter();
  if (router.query.c) {
    articles = articles.filter((i) => i.categories.includes(router.query.c));
  }
  const current = router.query.c || "---";

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
          <div className="mt-20">
            <BlogLayout
              aside={page.aside}
              categories={categoryData}
              current={current as string}
            >
              <article>
                <Article article={mainArticleData} image={page.start.image}>
                  <p>{mainArticleData.excerpt}</p>
                </Article>
                <div className="mt-5">
                  <Button href={`/starnews/${mainArticleData.slug}`}>
                    {page.start.button}
                  </Button>
                </div>
              </article>
              <div className="grid grid-cols-2 gap-8 mt-20">
                {articles.map((article) => (
                  <article key={article.slug}>
                    <Image {...article.previewimage} alt="test" />
                    <div className="mt-2">
                      <h2 className="text-3xl font-bold">{article.title}</h2>
                    </div>
                    <div className="mt-2">
                      <ArticleMeta article={article} />
                    </div>
                    <div className="mt-3">
                      <p>{article.excerpt}</p>
                    </div>
                    <div className="mt-5">
                      <Button href={`/starnews/${article.slug}`}>
                        {page.start.button}
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </BlogLayout>
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

  const articleData1 = getAllJSON("article");
  const articleData2 = await renderContent(articleData1);

  const mainArticleData = articleData2.find(
    (a) => a.slug === pageData.start.article
  );

  const articleData = articleData2.filter(
    (a) => a.slug !== pageData.start.article
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
