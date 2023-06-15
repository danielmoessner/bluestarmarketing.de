import Animate from "./Animate";
import Container from "./Container";
import Image from "next/image";
import Prose from "./Prose";

function SectionImageText({ section }) {
  return (
    <section
      key={section.markdown.html.slice(0, 100)}
      className="pt-12 pb-16 lg:pb-20"
    >
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="leading-[0px]">
                <Image
                  {...section.image}
                  alt={section.markdown.html.slice(0, 100)}
                />
              </div>
              <div className="">
                <Prose html={section.markdown.html} />
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionImageText;
