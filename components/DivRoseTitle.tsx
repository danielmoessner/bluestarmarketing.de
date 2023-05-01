import Container from "@/components/Container";

function DivRoseTitle({ section }) {
  return (
    <div className={section.padding}>
      <Container layout="sm">
        <div className="flex justify-center">
          <h2 className="text-5xl leading-normal text-center whitespace-pre-line font-rose">
            {section.title}
          </h2>
        </div>
      </Container>
    </div>
  );
}

export default DivRoseTitle;
