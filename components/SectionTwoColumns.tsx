import Animate from "./Animate";
import Container from "./Container";
import Prose from "./Prose";

function SectionTwoColumns({ section, padding = "pt-16 pb-16" }) {
  return (
    <section key={section.titleLeft} className={padding}>
      <Container layout="sm">
        <div className="grid gap-8 md:grid-cols-2">
          <Animate>
            <h2 className="text-5xl font-rose">{section.titleLeft}</h2>
            <div className="mt-5">
              <Prose html={section.markdownLeft.html} />
            </div>
          </Animate>
          <Animate>
            <h2 className="text-5xl font-rose">{section.titleRight}</h2>
            <div className="mt-5">
              <Prose html={section.markdownRight.html} />
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionTwoColumns;
