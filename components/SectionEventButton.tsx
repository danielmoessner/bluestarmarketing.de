import { getNextMeeting } from "@/lib/event";
import Container from "./Container";
import { formatDate } from "@/lib/date";
import Button from "./Button";

function SectionEventButton({ section, event }) {
  return (
    <section key={section.cta.text} className="pb-16">
      <Container layout="sm">
        <div className="flex justify-center">
          <div className="text-center">
            {getNextMeeting(event) && (
              <>
                <h3 className="mt-5 text-4xl font-rose">{section.next}</h3>
                <p>{formatDate(getNextMeeting(event).day, "full")}</p>
              </>
            )}

            <div className="mt-5">
              <Button href={section.cta.url} kind="purple">
                {section.cta.text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionEventButton;
