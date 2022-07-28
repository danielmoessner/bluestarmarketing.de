import Image from "next/image";
import { ImageRendered } from "types/shared";
import Heading from "./Heading";
// import Multiline from "./Multiline";
import Button from "./Button";
import Prose from "./Prose";

interface Props {
  service: {
    title: string;
    id: string;
    markdown: {
      html: string;
    };
    image: ImageRendered;
    cta: {
      text: string;
      url: string;
    };
    side: "R" | "L";
    color: string;
    quote?: string;
  };
}

function Component({ service }: Props) {
  return (
    <div
      className={`max-w-2xl bg-white ${
        service.side === "L" ? "mr-auto" : "ml-auto"
      }`}
      id={service.id}
    >
      <div
        className="w-full h-6"
        style={{ backgroundColor: service.color }}
      ></div>
      <div className="px-6 pt-6 pb-5 lg:pb-8 lg:px-10">
        <div className="flex justify-center">
          <Heading element="h3" size="h3" showStar={true}>
            {service.title}
          </Heading>
        </div>
        <div className="mt-6 lg:mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative">
              <Prose html={service.markdown.html} />
              {service.quote && (
                <div className="absolute right-0 -bottom-3">
                  <span className="text-xs">{service.quote}</span>
                </div>
              )}
            </div>
            <div className="leading-[0px]">
              <Image {...service.image} alt={service.title} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5 lg:mt-8">
          <Button href={service.cta.url}>{service.cta.text}</Button>
        </div>
      </div>
    </div>
  );
}

export default Component;
