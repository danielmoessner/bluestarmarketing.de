import Animate from "./Animate";
import Button from "./Button";
import Container from "./Container";
import Heading from "./Heading";
import Prose from "./Prose";
import Image from "next/image";

function SectionAboutImage({ section }) {
  return (
    <section className="relative py-16 ">
      <Container layout="sm">
        <div className="relative grid gap-8 lg:grid-cols-2">
          <div>
            <div className="flex flex-col-reverse">
              <div className="mt-2">
                <h2 className="text-2xl font-bold">{section.subtitle}</h2>
              </div>
              <div className="flex items-center space-x-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.textimage.src}
                  className="h-14"
                  alt={section.subtitle}
                />
                <Heading element="div" size="h2">
                  {section.title}
                </Heading>
              </div>
            </div>
            <div className="mt-8">
              <Prose html={section.markdown.html} />
            </div>
            <div className="mt-8 lg:mt-12">
              <Button href={section.cta.url}>{section.cta.text}</Button>
            </div>
          </div>
          <div>
            <Animate>
              <div className="leading-[0px]">
                <Image {...section.image} alt={section.title} />
              </div>
            </Animate>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionAboutImage;
