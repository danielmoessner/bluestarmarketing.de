import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";
import Animate from "./Animate";

function Component({ header, position = "bottom" }) {
  let positionClass = "";
  if (position === "top") positionClass = "lg:top-10 lg:right-10";
  else if (position === "left") positionClass = "lg:left-10 lg:bottom-10";
  else positionClass = "lg:bottom-10 lg:right-10";

  return (
    <header>
      <Container layout="sm">
        <div className="pt-8">
          <div className="relative">
            <div className="leading-[0px]">
              <Image
                {...header.image}
                alt={header.title}
                priority
                placeholder="empty"
                className="w-full"
              />
            </div>
            {header.text && header.cta && (
              <div
                className={`relative z-10 lg:w-5/12 lg:absolute  ${positionClass}`}
              >
                <Animate>
                  <div className="p-5 bg-bsm-matt/90">
                    <Heading element="h1" size="header">
                      {header.text}
                    </Heading>
                    <div className="mt-4">
                      <Button element="Link" href={header.cta.url}>
                        {header.cta.text}
                      </Button>
                    </div>
                  </div>
                </Animate>
              </div>
            )}
            {!(header.text && header.cta) && (
              <div
                className="w-full h-5"
                style={{ backgroundColor: header.color }}
              ></div>
            )}
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
