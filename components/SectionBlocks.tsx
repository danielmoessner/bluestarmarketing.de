import Button from "./Button";
import Container from "./Container";
import Prose from "./Prose";
import Image from "next/image";
import YoutubeVideo from "./YoutubeVideo";

function SectionBlocks({ section, padding = "pb-12 pt-10 md:pt-16" }) {
  return (
    <section className={"bg-[url('/sternenhimmel.jpg')] bg-repeat " + padding}>
      <Container layout="sm">
        <div className="grid grid-cols-2 gap-y-10 gap-x-10">
          {section.blocks.map((block) => {
            if (block.type === "text")
              return (
                <div
                  key={block.title + block.numbers}
                  className="col-span-2 px-4 py-4 bg-white lg:px-8 lg:py-5"
                >
                  <div className="flex justify-center">
                    <h2
                      className={`flex items-center text-2xl lg:text-4xl font-medium ${
                        block.numbers && block.numbers.includes("&")
                          ? "text-bsm-pink"
                          : "text-bsm-purple"
                      } md:text-6-xl`}
                    >
                      {block.numbers &&
                        block.numbers.map((n, i) => (
                          <div key={n} className="flex items-center">
                            {i > 0 && <div className="mx-0.5">+</div>}
                            <div
                              className={`flex items-center justify-center w-6 h-6 text-base font-normal text-white rounded-full ${
                                block.numbers.includes("&")
                                  ? "bg-bsm-pink"
                                  : "bg-bsm-purple"
                              }`}
                            >
                              <div>{n}</div>
                            </div>
                          </div>
                        ))}
                      <span className="ml-3">{block.title}</span>
                    </h2>
                  </div>
                  <div className="flex justify-center mt-5">
                    <div className="mb-4 text-3xl md:text-5xl font-rose">
                      {block.subtitle}
                    </div>
                  </div>
                  {block.video && (
                    <div className="max-w-lg pt-5">
                      <YoutubeVideo videoId={block.video} />
                    </div>
                  )}
                  <div className="mt-8">
                    <Prose
                      html={block.markdown.html}
                      className="[&_img]:w-64"
                    />
                  </div>
                  {block.cta &&
                    block.cta.text &&
                    block.cta.url &&
                    block.cta.kind && (
                      <div className="flex justify-center mt-10">
                        <Button kind={block.cta.kind} href={block.cta.url}>
                          {block.cta.text}
                        </Button>
                      </div>
                    )}
                </div>
              );

            if (block.type === "video")
              return (
                <div
                  key={block.title}
                  className="col-span-2 px-4 py-4 bg-white md:col-span-1 lg:px-8 lg:py-5"
                >
                  <div>
                    <h2 className="text-2xl font-medium text-center lg:text-3xl text-bsm-purple">
                      {block.title}
                    </h2>
                    <div className="block mt-5 text-4xl text-center font-rose">
                      {block.text}
                    </div>
                    <div className="mt-5">
                      <YoutubeVideo videoId={block.videoUrl} />
                    </div>
                  </div>
                </div>
              );

            if (block.type === "questionnaires")
              return (
                <div
                  key={block.title}
                  className="col-span-2 px-4 py-4 bg-white md:col-span-1 lg:px-8 lg:py-5"
                >
                  <div>
                    <h2 className="text-2xl font-medium text-center lg:text-3xl text-bsm-purple">
                      {block.title}
                    </h2>
                    <div className="block mt-5 text-4xl text-center font-rose">
                      {block.text}
                    </div>
                    <div className="flex gap-6">
                      <div className="flex flex-col justify-center w-1/2">
                        <a
                          className="flex"
                          href={block.pdf1}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image {...block.image1} alt="Fragebogen 1" />
                        </a>
                        <div className="text-center">
                          <a
                            className="hover:underline"
                            href={block.pdf1}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {block.link1Text}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center w-1/2">
                        <a
                          className="flex"
                          href={block.pdf2}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image {...block.image2} alt="Fragebogen 2" />
                        </a>
                        <div className="text-center">
                          <a
                            className="hover:underline"
                            href={block.pdf2}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {block.link2Text}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SectionBlocks;
