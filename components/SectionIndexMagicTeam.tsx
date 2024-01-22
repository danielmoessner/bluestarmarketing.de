import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import Animate from "./Animate";
import Prose from "./Prose";
import HeadingStar from "./HeadingStar";
import Heading from "./Heading";

function SectionImageTitleRoseTextButton({
  section,
  padding = "pt-12 pb-16 lg:pb-20",
}) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="flex justify-center mb-10">
              <Heading element="h2" size="h1">
                Make-it-happen
              </Heading>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-between pt-8 pb-8">
                <div className="">
                  <h3 className="relative inline-block text-3xl md:text-5xl ">
                    <span className="ml-5 text-5xl font-rose md:text-8xl text-bsm-ocean">
                      Your
                    </span>
                    Magic Team
                    <div className="absolute flex items-center justify-center mx-auto pointer-events-none md:top-10 top-4 -right-7 md:-right-10 lg:-right-12">
                      <HeadingStar />
                    </div>
                  </h3>
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
              <div>
                <div className="flex justify-start">
                  <h3 className="relative inline-block pt-10 mt-5 text-3xl md:text-5xl">
                    MehrWERT
                    <div className="absolute flex items-center justify-center mx-auto pointer-events-none md:top-14 lg:top-10 top-12 -right-7 md:-right-10 lg:-right-12">
                      <HeadingStar />
                    </div>
                  </h3>
                </div>
                <div className="leading-[0px] mt-12">
                  <div className="block leading-[0px] border-bsm-orientblue border-2 mb-5 max-w-xs">
                    <Image {...section.image} alt={section.title} />
                  </div>
                  <Button
                    href="https://www.starnews.bluestarmarketing.de/magicteam/"
                    target="_blank"
                    kind="ocean"
                    element="a"
                  >
                    Anmelden & Guide erhalten
                  </Button>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionImageTitleRoseTextButton;
