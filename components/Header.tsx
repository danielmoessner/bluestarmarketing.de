import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import Animate from "./Animate";
import { ImageRendered } from "types/shared";

interface Header1 {
  markdown: { html: string };
  image: ImageRendered;
  title: string;
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
                    {header.title &&
                      header.title === "management_sales_marketing" && (
                        <div className="mb-2">
                          <h1 className="flex items-center flex-wrap text-[1.7rem] tracking-tight leading-none uppercase">
                            <span>Management</span>
                            <div className="flex-shrink-0 w-5 ml-1 mr-0.5">
                              <Image
                                width={151}
                                height={177}
                                src="/herz_und_gross.png"
                                alt="& Zeichen"
                              />
                            </div>
                            <span>Sales</span>
                            <div className="flex-shrink-0 w-5 ml-1 mr-0.5">
                              <Image
                                width={151}
                                height={177}
                                src="/herz_und_gross.png"
                                alt="& Zeichen"
                              />
                            </div>
                            <span>Marketing</span>
                          </h1>
                          <div className="text-xl uppercase">
                            Empowerment For Integral Business
                          </div>
                        </div>
                      )}
                    <div
                      className="text-2xl"
                      dangerouslySetInnerHTML={{
                        __html: header.markdown.html,
                      }}
                    ></div>
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
