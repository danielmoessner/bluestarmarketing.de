import Image from "next/image";
import { BlurImage } from "types/shared";

interface Props {
  imageProps: BlurImage["imageProps"];
  alt: string;
}

function Hero({ imageProps, alt }: Props) {
  return (
    <section className="w-full">
      <div className="flex">
        <div className="rounded-lg shadow text-[0]">
          <Image
            className="mx-auto rounded-lg shadow aspect-[16/10]"
            {...imageProps}
            alt={alt}
            width={1600}
            height={1000}
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
