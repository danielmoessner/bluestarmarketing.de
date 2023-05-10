import Animate from "./Animate";
import Container from "./Container";
import Prose from "./Prose";
import Carousel from "./Carousel";

function SectionImagesText({ section }) {
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
                <Carousel images={section.images} />
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

export default SectionImagesText;
