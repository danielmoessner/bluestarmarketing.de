import Animate from "./Animate";
import Container from "./Container";
import Prose from "./Prose";
import YoutubeVideo from "./YoutubeVideo";

function SectionTextVideo({ section }) {
  return (
    <section key={section.title} className="pt-12 pb-16 lg:pb-20">
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="">
                  <Prose html={section.markdown.html} />
                </div>
              </div>
              <div className="leading-[0px]">
                <YoutubeVideo videoId={section.video} />
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionTextVideo;
