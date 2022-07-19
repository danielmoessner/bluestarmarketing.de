import Image from "next/image";
import { ImageRendered } from "types/shared";
import Heading from "./Heading";
import Multiline from "./Multiline";
import Button from "./Button";

interface Props {
  service: {
    title: string;
    id: string;
    text: string;
    image: ImageRendered;
    cta: {
      text: string;
      url: string;
    };
    side: "R" | "L";
    color: string;
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
      <div className="px-10 pt-6 pb-8">
        <div className="flex justify-center">
          <Heading element="h3" size="h3" showStar={true}>
            {service.title}
          </Heading>
        </div>
        <div className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Multiline text={service.text} />
            </div>
            <div className="leading-[0px]">
              <Image {...service.image} alt={service.title} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button href={service.cta.url}>{service.cta.text}</Button>
        </div>
      </div>
    </div>
  );
}

export default Component;
