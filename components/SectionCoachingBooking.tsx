import Animate from "./Animate";
import Container from "./Container";
import Image from "next/image";
import Prose from "./Prose";
import Button from "./Button";

function SectionCoachingBooking({ section, padding = "py-12" }) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mt-4 md:mt-6">
                  <Prose html={section.markdown.html} />
                </div>
                <Button kind="purple" href={section.cta.url}>
                  {section.cta.text}
                </Button>
              </div>
              <a
                href={section.cta.url}
                className="block leading-[0px] border border-bsm-nightblue"
              >
                <Image {...section.image} alt={section.imageAlt} />
              </a>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionCoachingBooking;
