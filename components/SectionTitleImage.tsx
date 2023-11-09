import Container from "@/components/Container";
import Image from "next/image";

function SectionTitleImage({ section }) {
  return (
    <section className="py-8 lg:py-20 !overflow-auto">
      <Container layout="sm">
        <div className="flex justify-center">
          <h2 className="mb-4 text-3xl md:text-5xl font-rose lg:mb-12">
            {section.title}
          </h2>
        </div>
        <div
          className={`justify-center ${
            section.mobileImage ? "hidden lg:flex" : ""
          }`}
        >
          <Image {...section.image} alt={section.title} />
        </div>
        {section.mobileImage && (
          <div className="flex justify-center lg:hidden">
            <Image {...section.mobileImage} alt={section.title} />
          </div>
        )}
      </Container>
    </section>
  );
}

export default SectionTitleImage;
