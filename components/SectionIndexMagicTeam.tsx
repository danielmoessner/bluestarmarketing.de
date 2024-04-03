import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import Animate from "./Animate";
import HeadingStar from "./HeadingStar";
import Heading from "./Heading";
import ProseRaw from "./ProseRaw";

function SectionImageTitleRoseTextButton({
  section,
  padding = "pt-16 pb-16 lg:pb-20",
}) {
  return (
    <section className={padding}>
      <Container layout="sm">
        <div className="">
          <Animate>
            <div className="flex justify-center mb-10">
              <Heading element="h2" size="h1">
                <span>MehrWir</span>
                <div className="inline-block ml-3 w-8 h-8 bg-[url('/stern_klein.svg')]"></div>
                <span>MehrWert</span>
                <div className="inline-block ml-3 w-8 h-8 bg-[url('/stern_klein.svg')]"></div>
                <span>MehrWachstum</span>
              </Heading>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-between pt-10">
                <div className="">
                  <h3 className="relative inline-block text-3xl md:text-5xl ">
                    Mehr möglich machen
                    <div className="absolute flex items-center justify-center mx-auto pointer-events-none md:top-2 top-4 -right-7 md:-right-10 lg:-right-12">
                      <HeadingStar />
                    </div>
                  </h3>
                  <div className="mt-4 md:mt-14">
                    <ProseRaw>
                      <ul>
                        <li>
                          Meistere Komplexität, Krisen & Dauerbrenner
                          funktionsübergreifend & auf allen Ebenen
                        </li>
                        <li>
                          Überwinde Hindernisse, Widerstände und schleppende
                          Zusammenarbeit
                        </li>
                        <li>
                          Neue & integrale Lösungen für Dich, Dein Business und
                          Dein Team in Co-Creation
                        </li>
                        <li>
                          Mit WIR-Power in einer Absicht & gemeinsamen Zielen zu
                          <b> mehrWERT & mehrWACHSTUM</b>
                        </li>
                        <li>Zukunft ist JETZT!</li>
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
              <div>
                <div className="flex justify-start">
                  <h3 className="relative inline-block pt-10 text-3xl md:text-5xl">
                    MehrWERT
                    <div className="absolute flex items-center justify-center mx-auto pointer-events-none md:top-14 lg:top-10 top-12 -right-7 md:-right-10 lg:-right-12">
                      <HeadingStar />
                    </div>
                  </h3>
                </div>
                <div className="leading-[0px] mt-12">
                  <div className="block leading-[0px] border-bsm-orientblue border-2 mb-5 max-w-xs">
                    <Image {...section.image} alt={section.title} />
                  </div>
                  <Button
                    href="https://www.starnews.bluestarmarketing.de/magicteam/"
                    target="_blank"
                    kind="ocean"
                    element="a"
                  >
                    Anmelden & Guide erhalten
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

export default SectionImageTitleRoseTextButton;
