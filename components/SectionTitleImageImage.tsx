import Animate from "./Animate";
import Container from "./Container";
import Image from "next/image";

function SectionTitleImageImage({ section, padding = "" }) {
  return (
    <div className={padding}>
      <Container layout="sm">
        <div className="">
          <h2 className="text-3xl text-center md:text-5xl font-rose">
            {section.title}
          </h2>
          <div className="mt-12">
            <Animate>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="leading-[0px]">
                  <Image {...section.image1} alt={section.alt1} />
                </div>
                <div className="leading-[0px]">
                  <Image {...section.image2} alt={section.alt2} />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionTitleImageImage;
