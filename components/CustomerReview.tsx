import Animate from "./Animate";

interface Props {
  customer: string;
  text: string;
  company?: string;
}

function Container({ customer, text, company }: Props) {
  return (
    <div className="grid py-4 md:py-4 break-inside-avoid">
      <div className="relative">
        <Animate>
          <div className="absolute left-0 right-0 mx-auto -top-4 lg:-top-5">
            <svg
              id="a"
              className="w-8 h-8 mx-auto opacity-85"
              data-name="Ebene 1"
              version="1.1"
              viewBox="0 0 42.52 38.7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m38.62 27.59c2.6-4.4 3.9-9.72 3.9-15.97 0-3.7-0.72-6.56-2.17-8.59-1.45-2.02-3.33-3.03-5.64-3.03-1.97 0-3.59 0.61-4.86 1.82-1.27 1.22-1.91 2.92-1.91 5.12s0.72 3.82 2.17 4.86 2.98 1.56 4.6 1.56c0.69 0 1.15-0.06 1.39-0.17 0 4.86-0.98 8.88-2.95 12.06s-4.86 6.33-8.68 9.46l3.12 3.99c4.74-3.01 8.42-6.71 11.02-11.11m-24.47 0c2.6-4.4 3.9-9.72 3.9-15.97 0-3.7-0.72-6.56-2.17-8.59-1.44-2.02-3.32-3.03-5.63-3.03-1.97 0-3.59 0.61-4.86 1.82-1.27 1.22-1.91 2.92-1.91 5.12s0.72 3.82 2.17 4.86c1.44 1.04 2.98 1.56 4.6 1.56 0.69 0 1.16-0.06 1.39-0.17 0 4.86-0.98 8.88-2.95 12.06s-4.86 6.34-8.68 9.46l3.12 3.99c4.74-3.01 8.42-6.71 11.02-11.11"
                fill="#162259"
              />
            </svg>
          </div>
          <div className="p-5 bg-bsm-alice">
            <h3 className="sr-only">{customer}</h3>
            <p className="text-sm italic leading-normal">{text}</p>
            <div className="mt-4">
              <span className="block font-bold">{customer}</span>
              {company && <span className="block text-sm">{company}</span>}
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
}

export default Container;