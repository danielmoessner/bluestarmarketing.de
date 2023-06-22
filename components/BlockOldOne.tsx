import { getNextMeeting } from "@/lib/event";
import Prose from "./Prose";
import { formatDate } from "@/lib/date";
import YoutubeVideo from "./YoutubeVideo";
import Carousel from "./Carousel";
import Button from "./Button";

function BlockOldOne({ block, event, page }) {
  return (
    <div>
      <h2 className="text-5xl text-center uppercase">
        {block.titleNormal}{" "}
        <span className="normal-case font-rose">{block.titleRose} </span>
        {block.titleNormalAfter}
      </h2>
      <div className="grid gap-8 mt-8 lg:grid-cols-2">
        <div>
          {block.markdown && <Prose html={block.markdown.html} />}
          {block.properties.map((p) => (
            <div key={p.title}>
              <h3 className="mt-5 text-4xl font-rose">{p.title}</h3>
              <Prose html={p.markdown.html} />
            </div>
          ))}
          {getNextMeeting(event) && (
            <>
              <h3 className="mt-5 text-4xl font-rose">{page.listing.next}</h3>
              <p>{formatDate(getNextMeeting(event).day, "full")}</p>
            </>
          )}
        </div>
        <div className="flex flex-col justify-between">
          {block.youtube && (
            <div>
              <YoutubeVideo videoId={block.youtube} />
            </div>
          )}
          {!block.youtube && (
            <div className="leading-[0px]">
              <Carousel images={block.images} />
            </div>
          )}
          <div className="flex justify-center mt-6 md:justify-start">
            <Button kind="pink" href={`/startimes/${event.slug}/`}>
              {page.listing.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockOldOne;
