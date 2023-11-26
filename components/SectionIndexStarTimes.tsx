import Button from "./Button";
import Container from "./Container";
import Animate from "./Animate";
import HeadingStar from "./HeadingStar";
import ProseRaw from "./ProseRaw";
import Heading from "./Heading";

function SectionIndexStarTimes({ section, padding = "pt-12 pb-16 lg:pb-20" }) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="mb-16">
              <Heading element="h2" size="h1" showStar>
                StarTimes for you
              </Heading>
            </div>
            <div className="grid gap-12 md:grid-cols-2 [&>div]:bg-bsm-alice [&>div]:px-6 [&>div]:pt-8 [&>div]:pb-5">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="relative inline-block h-16">
                    <span className="absolute inline-block text-5xl whitespace-nowrap font-rose md:text-8xl text-bsm-ocean">
                      for you
                      <div className="absolute flex items-center justify-center mx-auto pointer-events-none md:top-8 top-4 -right-7 md:-right-10 lg:-right-12">
                        <HeadingStar />
                      </div>
                    </span>
                  </h2>
                  <div className="mt-4 md:mt-14">
                    <ProseRaw>
                      <p>
                        Consulting & Coaching für Sales, Marketing & Management
                      </p>
                      <p>
                        Individuell-einzigartige Lösungen für mehr… <br />
                        Klarheit…Freude…Erfolg…&…
                      </p>
                      <p>
                        <b>3/5/9 Coachings in Folge</b>
                      </p>
                      <ul>
                        <li>Deine Wünsche & Bedürfnisse</li>
                        <li>Strategie & Plan zur Umsetzung</li>
                        <li>Re-Loop: Check & Adaption</li>
                      </ul>
                      <p>
                        <b>Marketing & Sales Quick Fix in Co-Creation</b>
                      </p>
                      <ul>
                        <li>zu konkreter & klar umrissener Fragestellung</li>
                      </ul>
                    </ProseRaw>
                  </div>
                </div>
                <div className="">
                  <Button
                    href="https://outlook.office365.com/owa/calendar/AusKopfundHerzindeineHndeCheckIn@bluestarmarketing2.onmicrosoft.com/bookings/"
                    kind="ocean"
                  >
                    Ich freue mich auf Dich!
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="relative inline-block h-16">
                    <span className="absolute inline-block text-5xl whitespace-nowrap font-rose md:text-8xl text-bsm-orientblue">
                      for teams
                      <div className="absolute flex items-center justify-center mx-auto pointer-events-none md:top-8 top-4 -right-7 md:-right-10 lg:-right-12">
                        <HeadingStar />
                      </div>
                    </span>
                  </h2>
                  <div className="mt-4 md:mt-14">
                    <ProseRaw>
                      <p>
                        Potenziale heben - Performance steigern Neues schaffen &
                        Ziele erreichen Individuell-einzigartige Lösungen durch
                        WIR-Power & Freude in Deinem Team & Unternehmen für alle
                        schaffen.
                      </p>
                      <p>
                        <b>Make-it-Happen</b>
                      </p>
                      <ul>
                        <li>Initial Deep Brief</li>
                        <li>Power-Kick-Off</li>
                        <li>1:1 Deep Dives in Vor- & Nachbereitung</li>
                        <li>Wir-Power-Workshop</li>
                      </ul>
                    </ProseRaw>
                  </div>
                </div>
                <div className="">
                  <Button href={section.cta.url} kind="ocean">
                    {section.cta.text}
                  </Button>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionIndexStarTimes;
