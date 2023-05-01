import Container from "@/components/Container";
import Heading from "./Heading";

function DivTitle({ section }) {
  return (
    <div className={"!overflow-auto " + section.padding}>
      <Container layout="sm">
        <div className="flex justify-center">
          <Heading size="h1">{section.title}</Heading>
        </div>
      </Container>
    </div>
  );
}

export default DivTitle;
