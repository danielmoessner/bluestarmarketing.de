import Animate from "./Animate";
import Container from "./Container";
import CustomerReview from "./CustomerReview";
import Prose from "./Prose";
import YoutubeVideo from "./YoutubeVideo";

function SectionTitleTextVideoQuote({ section }) {
  return (
    <section key={section.title} className="pt-12 pb-16 lg:pb-20">
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-5xl font-rose">
                  {section.title}
                </h2>
                <div className="mt-4 md:mt-6">
                  <Prose html={section.markdown.html} />
                </div>
              </div>
              <div>
                <div className="leading-[0px]">
                  <YoutubeVideo videoId={section.video} />
                </div>
                <div className="pt-8">
                  <CustomerReview
                    text={section.quote.text}
                    customer={section.quote.customer}
                  />
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionTitleTextVideoQuote;
