import Image from "next/image";
import Animate from "./Animate";
import Button from "./Button";

function BlockThreeCards({ block }) {
  return (
    <div key="threeCards">
      <Animate>
        <div className="grid gap-8 md:grid-cols-3">
          {block.cards.map((card, index) => (
            <div key={card.alt} className="p-5 bg-white shadow">
              <div className="leading-[0px] p-8">
                <Image
                  {...card.image}
                  alt={"Bild der Karte " + index}
                  className="items-center justify-center w-auto h-48 mx-auto"
                />
              </div>
              <div className="flex justify-center w-full">
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
