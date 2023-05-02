import Container from "@/components/Container";
import Image from "next/image";
import Animate from "@/components/Animate";

function SectionImageImage({ section, padding = "py-12" }) {
  return (
    <div className={padding}>
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="leading-[0px]">
                <Image {...section.image1} alt={section.image1Alt} />
              </div>
              <div className="leading-[0px]">
                <Image {...section.image2} alt={section.image2Alt} />
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </div>
  );
}

export default SectionImageImage;
