import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import Prose from "./Prose";

function SectionTitleImageImage({ section, padding = "py-8 lg:py-16" }) {
  return (
    <section key={section.title} className={padding}>
      <Container layout="sm">
        <div className="flex justify-center">
          <h2 className="mb-4 text-3xl md:text-5xl font-rose lg:mb-8">
            {section.title}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="">
              <Prose html={section.markdown.html} />
            </div>
            <div className="">
              <Button href={section.cta.url}>{section.cta.text}</Button>
            </div>
          </div>
          <div className="">
            <Image {...section.image} alt={section.title} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionTitleImageImage;
