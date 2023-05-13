import Image from "next/image";
import Button from "./Button";
import Container from "./Container";

function SectionTitleImageButton({ section, padding = "py-8 lg:py-20" }) {
  return (
    <section key={section.title} className={padding}>
      <Container layout="sm">
        <div className="flex justify-center">
          <h2 className="mb-4 text-3xl md:text-5xl font-rose lg:mb-14">
            {section.title}
          </h2>
        </div>
        <div className="">
          <Image {...section.image} alt={section.title} />
        </div>
        <div className="flex justify-center mt-6 lg:mt-12">
          <Button kind={section.cta.kind} href={section.cta.url}>
            {section.cta.text}
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default SectionTitleImageButton;
