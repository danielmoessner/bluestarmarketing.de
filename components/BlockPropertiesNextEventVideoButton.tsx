import { getNextMeeting } from "@/lib/event";
import Prose from "./Prose";
import { formatDate } from "@/lib/date";
import YoutubeVideo from "./YoutubeVideo";
import Button from "./Button";

function BlockPropertiesNextEventVideoButton({ block, event, nextEventText }) {
  return (
    <div>
      <div className="grid gap-8 mt-8 lg:grid-cols-2">
        <div>
          {block.properties.map((p, i) => (
            <div key={p.title + i}>
              {p.title && (
                <h3 className="mt-5 text-4xl font-rose">{p.title}</h3>
              )}
              <Prose html={p.markdown.html} />
            </div>
          ))}
          {getNextMeeting(event) && (
            <>
              <h3 className="mt-5 text-4xl font-rose">{nextEventText}</h3>
              <p>{formatDate(getNextMeeting(event).day, "full")}</p>
            </>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <YoutubeVideo videoId={block.youtube} />
          </div>
          <div className="flex justify-center mt-6 md:justify-start">
            <Button kind={block.cta.kind} href={block.cta.url}>
              {block.cta.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockPropertiesNextEventVideoButton;
