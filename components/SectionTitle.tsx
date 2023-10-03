import Container from "./Container";
import Heading from "./Heading";

function SectionTitle({ section, padding = "pt-16 lg:pb-10" }) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="pb-2 text-center">
          <Heading size="h1">{section.title}</Heading>
        </div>
      </Container>
    </section>
  );
}

export default SectionTitle;
