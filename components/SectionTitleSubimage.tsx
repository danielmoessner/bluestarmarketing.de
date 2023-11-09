import Container from "@/components/Container";
import Image from "next/image";
import Heading from "./Heading";

function SectionTitleSubimage({ section }) {
  return (
    <section className="py-8 lg:py-20 !overflow-auto">
      <Container layout="sm">
        <div className="pb-2 text-center">
          <Heading size="h1">{section.title}</Heading>
        </div>
        <div className="justify-center max-w-md mx-auto mt-8">
          <Image {...section.image} alt={section.title} />
        </div>
      </Container>
    </section>
  );
}

export default SectionTitleSubimage;
