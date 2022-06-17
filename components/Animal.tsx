import React from "react";
import Hero from "./Hero";
import Animate from "./Animate";
import { Animal } from "contentlayer/generated";
import { BlurImage } from "types/shared";

interface Props {
  body: string;
  animal: Animal & BlurImage;
}

function Component({ animal, body }: Props) {
  return (
    <div>
      <div className="mb-6">
        <Animate>
          <Hero imageProps={animal.imageProps} alt={animal.title} />
        </Animate>
      </div>
      <div className="w-full max-w-xl mx-auto mb-3">
        <Animate delay={1}>
          <div className="-mb-2 font-medium leading-tight tracking-tight text-gray-600 uppercase">
            {animal.category}
          </div>
        </Animate>
        <Animate delay={2}>
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-gray-800">
            {animal.title}
          </h2>
        </Animate>
      </div>
      <div className="w-full max-w-xl mx-auto mb-40">
        <Animate delay={3}>
          <article
            className="prose-sm sm:prose lg:prose-xl"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </Animate>
      </div>
    </div>
  );
}

export default Component;
