import Image from "next/image";
import Animate from "./Animate";
import Button from "./Button";

function BlockThreeCards({ block }) {
  return (
    <div key="threeCards">
      <Animate>
        <div className="grid gap-8 md:grid-cols-3">
          {block.cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-start p-5 bg-white shadow-lg"
            >
              <div
                className={
                  "leading-[0px] h-full flex flex-col justify-center " +
                  card.padding
                }
              >
                <Image
                  {...card.image}
                  alt={"Bild der Karte " + index}
                  className="w-auto mx-auto"
                />
              </div>
              <div className="flex justify-center w-full mt-auto">
                <Button kind={card.buttonKind} href={card.cta.url}>
                  {card.cta.text}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Animate>
    </div>
  );
}

export default BlockThreeCards;
