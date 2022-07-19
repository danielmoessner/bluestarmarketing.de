import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Container from "../../components/Container";
import { getAllJson } from "lib/getContent";
import Article from "../../components/Article";
import BlogLayout from "../../components/BlogLayout";
import { renderContent } from "lib/renderContent";
import pageSource from "../../content/page/starnews.json";
import Prose from "../../components/Prose";
import footerSource from "../../content/setting/footer.json";
import Footer from "../../components/Footer";

function Page({ articleData, pageData, categoryData, footerData }) {
  const page = pageData;

  const meta = {
    title: articleData.title,
    description: articleData.excerpt,
    image: articleData.image.src,
  };

  return (
    <Layout>
      <Seo meta={meta} />
      <section className="pt-12 pb-20">
        <Container layout="sm">
          <BlogLayout aside={page.aside} categories={categoryData}>
            <article>
              <Article article={articleData} image={articleData.image}>
                <div className="mt-8">
                  <Prose html={articleData.markdown.html} />
                </div>
              </Article>
            </article>
          </BlogLayout>
        </Container>
      </section>
      <Footer data={footerData} />
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const items = getAllJson("article");

  const articleDataSource = items.find((i) => i.slug === slug);
  const articleData = await renderContent(articleDataSource);

  const pageData = await renderContent(pageSource);
  const categoryData = getAllJson("category");

  const footerData = await renderContent(footerSource);

  return {
    props: {
      footerData,
      categoryData,
      pageData,
      articleData,
    },
  };
}

export async function getStaticPaths() {
  const items = getAllJson("article");

  return {
    paths: items.map((i) => {
      return {
        params: {
          slug: i.slug,
        },
      };
    }),
    fallback: false,
  };
}
