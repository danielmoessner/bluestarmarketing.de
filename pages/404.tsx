// // import { graphql } from 'gatsby';
// import React from "react";
// // import PropTypes from 'prop-types';
// // import { Link, graphql } from 'gatsby';
// // import { Transition } from '@headlessui/react';
import Container from "../components/Container";
import Layout from "../components/Layout";
import Button from "../components/Button";

function Page() {
  return (
    <Layout>
      <Container layout="sm">
        <div className="flex justify-center">
          <div className="py-[10vh]">
            <h1 className="text-3xl font-bold">404</h1>
            <p className="mt-1 text-lg">
              Die Seite wurde leider nicht gefunden.
            </p>
            <div className="mt-5">
              <Button href="/">Zurück zur Startseite</Button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

// Page.defaultProps = {};

// Page.propTypes = {
//   // eslint-disable-next-line
//   // data: PropTypes.object.isRequired,
// };

export default Page;

// // export const query = graphql`
// //   {
// //     pagesYaml(slug: { eq: "NONE" }) {
// //       meta {
// //         image {
// //           childImageSharp {
// //             resize(width: 1200) {
// //               src
// //             }
// //           }
// //         }
// //         description
// //         title
// //       }
// //     }
// //   }
// // `;
