import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";
import Animate from "./Animate";
import { ImageRendered } from "types/shared";

interface Header1 {
  markdown: { html: string };
  image: ImageRendered;
  cta: {
    text: string;
    url: string;
  };
}

interface Header2 {
  image: ImageRendered;
  color: string;
}

interface Header3 {
  image: ImageRendered;
}

interface Props {
  header: Header1 | Header2 | Header3;
  position?: "top-right" | "bottom-right" | "bottom-left" | "top-left";
}

function Component({ header, position = "bottom-right" }: Props) {
  let positionClass = "";
  if (position === "top-right") positionClass = "lg:top-10 lg:right-10";
  else if (position === "bottom-left")
    positionClass = "lg:left-10 lg:bottom-10";
  else if (position === "bottom-right")
    positionClass = "lg:bottom-10 lg:right-10";
  else if (position === "top-left") positionClass = "lg:top-10 lg:left-10";

  return (
    <header>
      <Container layout="sm">
        <div className="pt-8">
          <div className="relative">
            <div className="leading-[0px]">
              <Image
                {...header.image}
                alt="Header"
                priority
                placeholder="empty"
                className="w-full"
              />
            </div>
            {"markdown" in header && "cta" in header && (
              <div
                className={`relative z-10 lg:w-5/12 lg:absolute  ${positionClass}`}
              >
                <Animate>
                  <div className="p-5 bg-bsm-matt/90">
                    <Heading element="h1" size="header">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: header.markdown.html,
                        }}
                      ></div>
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
            {"color" in header && (
              <div
                className="w-full h-5"
                style={{ backgroundColor: header.color as string }}
              ></div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Component;
