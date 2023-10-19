import React from "react";
import Head from "next/head";
import global from "../content/setting/global.json";

interface Meta {
  title: string;
  description: string;
  image?: { src: string };
  keywords?: string;
}

interface Props {
  meta: Meta;
}

function Seo({ meta }: Props) {
  const { title, description, image, keywords } = meta;

  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {image ? <meta name="image" content={image.src} /> : null}

      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={image.src} /> : null}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image.src} /> : null}

      {/* Different Favicons */}
      <link
        rel="icon"
        type="image/png"
        href={global.de.favicon}
        sizes="256x256"
      />
      <link rel="apple-touch-icon" sizes="256x256" href={global.de.favicon} />
    </Head>
  );
}

export default Seo;
