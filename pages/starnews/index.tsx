import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Button";
import Article from "@/components/Article";
import BlogLayout from "@/components/BlogLayout";
import ArticleMeta from "@/components/ArticleMeta";
import { useRouter } from "next/router";
import { getAllJson, getSingleJson } from "../../lib/getContent";
import { renderContent } from "../../lib/renderContent";

function Page({
  pageData,
  footerData,
  categoryData,
  articleData,
  mainArticleData,
}) {
  //
  const page = pageData;

  let articles = articleData;
  const router = useRouter();
  if (router.query.c) {
    articles = articles.filter((i) => i.categories.includes(router.query.c));
  }
  const current = router.query.c || "---";
  const showArchived = "show-archived" in router.query;

  if (showArchived) {
    articles = articles.filter((i) => i.isArchived);
  } else {
    articles = articles.filter((i) => !i.isArchived);
  }

  return (
    <Layout>
      <Seo meta={page.meta} />
      <section className="py-5 lg:py-16">
        <Container layout="sm">
          <div className="flex justify-center">
            <Heading element="h1" size="h1" showStar>
              {page.start.title}
            </Heading>
          </div>
          <div className="mt-4 lg:mt-20">
            <BlogLayout
              aside={page.aside}
              categories={categoryData}
              current={current as string}
              showArchived={showArchived}
            >
              {!showArchived && (
                <article className="mb-20">
                  <Article article={mainArticleData} image={page.start.image}>
                    <div className="mt-4">
                      <p>{mainArticleData.excerpt}</p>
                    </div>
                  </Article>
                  <div className="mt-5">
                    <Button href={`/starnews/${mainArticleData.slug}`}>
                      {page.start.button}
                    </Button>
                  </div>
                </article>
              )}

              <div className="grid grid-cols-2 gap-8">
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

export async function getStaticProps({ locale }) {
  const pageData = await renderContent(
    getSingleJson("page", "starnews", locale),
  );
  const footerData = await renderContent(
    getSingleJson("setting", "footer", locale),
  );

  const categoryData = getAllJson("category", locale);
  const articleData1 = getAllJson("article", locale);

  const articleData2 = await renderContent(articleData1);

  const mainArticleData = articleData2.find(
    (a) => a._original.de.slug === pageData._original.de.start.article,
  );

  const articleData3 = articleData2.filter(
    (a) => a._original.de.slug !== pageData._original.de.start.article,
  );

  const articleData4 = articleData3.map((a) => ({
    categories: a.categories,
    excerpt: a.excerpt,
    isArchived: a.isArchived || false,
    previewimage: a.previewimage,
    date: a.date,
    slug: a.slug,
    title: a.title,
  }));

  const articleData = articleData4.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });

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
