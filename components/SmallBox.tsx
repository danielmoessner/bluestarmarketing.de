import Button from "@/components/Button";

function Component({ service }) {
  return (
    <div className="flex flex-col justify-between px-4 py-5 bg-white border border-bsm-orientblue/10">
      <div>
        <div className="text-left">
          <h3 className="text-2xl font-bold tracking-tight lg:text-3xl">
            {service.title}
          </h3>
        </div>
        <div className="mt-4">
          <p className="text-lg">{service.text}</p>
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <Button href={service.cta.url}>{service.cta.text}</Button>
      </div>
    </div>
  );
}

export default Component;
