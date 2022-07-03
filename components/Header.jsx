// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import { graphql } from "gatsby";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button";

function Component({ header }) {
  return (
    <header>
      <Container layout="sm">
        <div className="py-8 ">
          <div className="relative">
            <Image
              src={header.image}
              alt={header.title}
              width={1080}
              height={660}
            />
            <div className="absolute z-10 w-5/12 p-5 right-10 bottom-10 bg-bsm-matt/90">
              <h1 className="text-3xl font-normal">{header.text}</h1>
              <div className="mt-4">
                <Button element="Link" href={header.cta.url}>
                  {header.cta.text}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

// Component.defaultProps = {};

// Component.propTypes = {
//   header: PropTypes.shape({
//     title: PropTypes.string,
//     text: PropTypes.string,
//   }).isRequired,
// };

export default Component;

// export const headerFragment = graphql`
//   fragment header on PageYaml {
//     header {
//       title
//       text
//     }
//   }
//   fragment headerMarkdown on MarkdownRemarkFrontmatter {
//     header {
//       title
//       text
//     }
//   }
// `;
