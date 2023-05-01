import Button from "./Button";
import Container from "./Container";
import Prose from "./Prose";

function SectionBlocks({ section, padding = "pb-12 pt-10 md:pt-16" }) {
  return (
    <section className={"bg-[url('/sternenhimmel.jpg')] bg-repeat " + padding}>
      <Container layout="sm">
        <div className="space-y-10">
          {section.blocks.map((block) => (
            <div
              key={block.title}
              className="px-4 py-4 bg-white lg:px-8 lg:py-5"
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
              <div className="mt-8">
                <Prose html={block.markdown.html} className="" />
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
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SectionBlocks;
