import React from "react";
import Head from "next/head";
import global from "../content/setting/global.json";

function SEO({ meta }) {
  const { title, description, image, keywords } = meta;

  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {image ? <meta name="image" content={image} /> : null}

      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta property="og:image" content={image} /> : null}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}

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

// SEO.defaultProps = {};

// SEO.propTypes = {
//   meta: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.shape({
//       childImageSharp: PropTypes.shape({
//         resize: PropTypes.shape({
//           src: PropTypes.string,
//         }),
//       }),
//     }),
//   }).isRequired,
// };

export default SEO;

// export const metaFragment = graphql`
//   fragment meta on PageYaml {
//     meta {
//       image {
//         childImageSharp {
//           resize(width: 1200) {
//             src
//           }
//         }
//       }
//       title
//       description
//     }
//   }
//   fragment metaMarkdown on MarkdownRemarkFrontmatter {
//     meta {
//       image {
//         childImageSharp {
//           resize(width: 1200) {
//             src
//           }
//         }
//       }
//       title
//       description
//     }
//   }
// `;
