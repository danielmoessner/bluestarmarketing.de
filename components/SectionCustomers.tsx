import Container from "../components/Container";
import Heading from "../components/Heading";
import Animate from "../components/Animate";
import Multiline from "../components/Multiline";
import Button from "../components/Button";

function Component({ customers }) {
  return (
    <section className="py-32">
      <Container layout="sm">
        <div className="text-center">
          <Heading size="h2">{customers.title}</Heading>
        </div>
        <div className="mt-10">
          <Animate>
            <div className="px-5 py-5 md:px-20 md:py-8 bg-bsm-ocean/10">
              <Multiline text={customers.text} />
              <div className="mt-4">
                <span className="font-bold">{customers.customer}</span>
                {customers.company && (
                  <span className="">, {customers.company}</span>
                )}
              </div>
            </div>
          </Animate>
        </div>
        <div className="flex justify-center mt-10">
          <Button href={customers.cta.href}>{customers.cta.text}</Button>
        </div>
      </Container>
    </section>
  );
}

export default Component;
