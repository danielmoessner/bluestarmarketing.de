import Image from "next/image";
import Button from "./Button";
import Carousel from "./Carousel";
import Prose from "./Prose";

function BlockMarkdownImageImagesButton({ block }) {
  return (
    <div className="grid gap-8 mt-8 lg:grid-cols-2">
      <div>
        <Prose html={block.markdown.html} />
        <div className="">
          <Image {...block.image} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="leading-[0px]">
          <Carousel images={block.images} />
        </div>
        <div className="flex justify-center mt-6 md:justify-start">
          <Button kind={block.cta.kind} href={block.cta.url}>
            {block.cta.text}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BlockMarkdownImageImagesButton;
