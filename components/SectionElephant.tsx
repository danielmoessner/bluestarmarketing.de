import Container from "./Container";
import Animate from "./Animate";
import Image from "next/image";
import ManagementSalesMarketing from "./ManagementSalesMarketing";
import Heading from "./Heading";
import ProseRaw from "./ProseRaw";
import Button from "./Button";

function SectionElephant({ padding = "pt-16 pb-16 lg:pb-20" }) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="grid lg:gap-10 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <div className="flex justify-center pt-4">
              <ManagementSalesMarketing />
            </div>
            <div className="mt-4 text-center">
              <Heading showStar size="h3" element="h1">
                Nutze alle Potenziale & Ressourcen
              </Heading>
            </div>
          </div>

          <div>
            <Image
              src="/elephant-walking.jpeg"
              alt="Bunter Elefant"
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
          <Animate>
            <h2 className="text-2xl font-medium">
              Teamkräfte-Programm für MehrWert und Wachstum in Unternehmen mit
              Freude
            </h2>
            <div className="mt-8">
              <ProseRaw>
                <ul>
                  <li>
                    Teamkräfte bündeln: handlungsfähigere & engagierte Teams in
                    dynamischen Strukturen
                  </li>
                  <li>
                    in Co-Creation zu innovativen & wettbewerbsfähigen Lösungen
                  </li>
                </ul>
              </ProseRaw>
            </div>
            <h2 className="mt-8 text-xl font-medium ">
              Strategien – Prozesse –{" "}
              <span className="text-bsm-pink">
                Technologien & Menschen <br /> Menschen & Teams im Mittelpunkt
                der Wertschöpfung
              </span>
            </h2>
            <p className="mt-8">Ich für Dich und zusammen mit Euch.</p>
            <div className="mt-8">
              <Button
                href="https://www.starnews.bluestarmarketing.de"
                kind="pink"
              >
                Teamkräfte bündeln
              </Button>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  );
}

export default SectionElephant;
