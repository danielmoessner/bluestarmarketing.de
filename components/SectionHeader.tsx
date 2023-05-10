import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";

function SectionHeader({ section }) {
  return (
    <section className="pt-8 lg:pb-10">
      <Container layout="sm">
        <div className="">
          <div className="relative">
            <div className="leading-[0px]">
              <Image
                {...section.image}
                alt="Header"
                priority
                placeholder="empty"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="pt-8 text-center lg:pt-16">
          <Heading size="h1">{section.title}</Heading>
        </div>
      </Container>
    </section>
  );
}

export default SectionHeader;
