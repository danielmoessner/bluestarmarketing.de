import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import Animate from "./Animate";
import Prose from "./Prose";
import HeadingStar from "./HeadingStar";

function SectionImageTitleRoseTextButton({
  section,
  padding = "pt-12 pb-16 lg:pb-20",
}) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-between pt-8 pb-8">
                <div className="">
                  <h2 className="relative inline-block text-3xl md:text-5xl ">
                    <span className="ml-5 text-5xl font-rose md:text-8xl text-bsm-ocean">
                      {section.rose}
                    </span>
                    {section.title}
                    <div className="absolute flex items-center justify-center mx-auto pointer-events-none md:top-10 top-4 -right-7 md:-right-10 lg:-right-12">
                      <HeadingStar />
                    </div>
                  </h2>
                  <div className="mt-4 md:mt-6">
                    <Prose html={section.markdown.html} />
                  </div>
                </div>
                <div className="">
                  <Button href={section.cta.url} kind="ocean">
                    {section.cta.text}
                  </Button>
                </div>
              </div>
              <div className="leading-[0px]">
                <Image {...section.image} alt={section.title} />
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionImageTitleRoseTextButton;
