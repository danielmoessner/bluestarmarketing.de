import Container from "./Container";
import Prose from "./Prose";
import YoutubeVideo from "./YoutubeVideo";

function SectionTitleTextVideo({ section }) {
  return (
    <section key={section.title} className="pt-4 pb-16">
      <Container layout="sm">
        <div className="flex justify-center">
          <h2 className="mb-12 text-3xl md:text-5xl font-rose">
            {section.title}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="">
              <Prose className="-mt-12" html={section.markdown.html} />
            </div>
          </div>
          <div className="">
            <YoutubeVideo videoId={section.video} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionTitleTextVideo;
