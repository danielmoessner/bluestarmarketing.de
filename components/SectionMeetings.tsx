import Image from "next/image";
import Animate from "./Animate";
import Button from "./Button";
import Container from "./Container";
import { formatDate } from "@/lib/date";
import Prose from "./Prose";

function SectionMeetings({
  meetingsTitle,
  meetingsButton,
  meetingsTime,
  meetingsImage,
  meetingsImageAlt,
  meetings,
  eventSlug,
  padding = "pb-12 pt-10 md:pt-16",
}) {
  return (
    <section
      key="meetings"
      className={"bg-[url('/sternenhimmel.jpg')] bg-repeat " + padding}
    >
      <Container layout="sm">
        <div className="">
          <Animate>
            <h2 className="mx-auto text-5xl text-center font-rose">
              {meetingsTitle}
            </h2>
          </Animate>
          <div className="grid gap-8 mt-6 md:mt-10 md:grid-cols-2">
            {meetings.map((meeting) => (
              <Animate key={meeting.day}>
                <div className="flex flex-col justify-between h-full p-5 bg-white">
                  <div>
                    <div className="flex justify-between">
                      <div className="w-24">
                        <Image {...meetingsImage} alt={meetingsImageAlt} />
                      </div>
                      <div>
                        <p className="text-bsm-pink">
                          {formatDate(meeting.day, "full")}
                        </p>
                        <p className="text-bsm-pink">
                          {meeting.from}-{meeting.to} {meetingsTime}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Prose
                        html={
                          meeting.addons.find((a) => a.type === "listSection")
                            .markdown.html
                        }
                      />
                    </div>
                  </div>
                  <div className="flex justify-center pt-5">
                    <Button
                      kind="pink"
                      href={`/startimes/${eventSlug}/${meeting.day.replaceAll(
                        "-",
                        "",
                      )}`}
                    >
                      {meetingsButton}
                    </Button>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionMeetings;
