// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import { graphql } from "gatsby";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";

function Component({ header }) {
  return (
    <header>
      <Container layout="sm">
        <div className="pt-8">
          <div className="relative">
            <div className="leading-[0px]">
              <Image
                src={header.image}
                alt={header.title}
                width={1080}
                height={660}
              />
            </div>
            <div className="relative z-10 p-5 lg:w-5/12 lg:absolute lg:right-10 lg:bottom-10 bg-bsm-matt/90">
              <Heading element="h1">{header.text}</Heading>
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
