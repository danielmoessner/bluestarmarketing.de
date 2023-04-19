import Animate from "./Animate";
import Container from "./Container";
import Prose from "./Prose";
import Image from "next/image";

function SectionTitleText({ section }) {
  return (
    <section key={section.title} className="pt-12 pb-16 lg:pb-20">
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-5xl font-rose">
                  {section.title}
                </h2>
                <div className="mt-4 md:mt-6">
                  <Prose html={section.markdown.html} />
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

export default SectionTitleText;
