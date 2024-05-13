import Container from "./Container";
import Animate from "./Animate";
import Image from "next/image";
import Heading from "./Heading";
import ProseRaw from "./ProseRaw";
import Button from "./Button";

function SectionElephant({ padding = "pt-16 pb-16 lg:pb-20" }) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="grid lg:gap-10 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <div className="mt-4 text-center">
              <Heading showStar size="h3" element="h1">
                Aktiviere Deine Superkräfte Dein stärkeres ICH
              </Heading>
            </div>
          </div>
          <Animate>
            <h2 className="text-2xl font-medium">
              Superkräfte Coaching & Beratung für Marketing-Fach- und
              Führungskräfte
              <span className="block h-2"></span>
              Superkräfte Training für Teams
            </h2>
            <h3 className="mt-8 text-xl font-medium">
              Dein 7+1 Quartal zu mehr Wirksamkeit, Erfolg und Freude im
              Marketing & Business
            </h3>
            <div className="mt-8">
              <ProseRaw>
                <ul>
                  <li>auf Augenhöhe mit Management, Sales & Marketing</li>
                  <li>selbstwirksamer & selbstbewusster</li>
                  <li>wertschöpfend und wertschätzend</li>
                </ul>
              </ProseRaw>
            </div>
            <div className="mt-8">
              <Button
                href="https://www.starnews.bluestarmarketing.de/superkraefte/"
                kind="ocean"
              >
                Superkräfte aktivieren
              </Button>
            </div>
          </Animate>
          <div>
            <Image
              src="/elephant-standing.jpeg"
              alt="Bunter Elefant stehend"
              width={800}
              height={600}
              className="w-full"
            />
            <span className="block text-xs text-right">
              Bildquelle: Japan Copilot –{" "}
              <a target="_blank" href="https://stock.adobe.com/de/">
                stock.adobe.com
              </a>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionElephant;
