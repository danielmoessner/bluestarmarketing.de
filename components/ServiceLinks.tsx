import Link from "next/link";
import { PlusIcon } from "@heroicons/react/outline";

function Component({ links }) {
  const background = [
    "bg-bsm-faince",
    "bg-bsm-ocean",
    "bg-bsm-cornblue",
    "bg-bsm-orientblue",
    "bg-bsm-nightblue",
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute bottom-0 top-[11px] right-[-16px]">
        {/* service complicated svg icon stuff */}
        <svg
          className="h-[430px] my-auto"
          version="1.1"
          viewBox="0 0 315.57 484.43"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m219.69 242.95c-8.95 4.6-18.14 8.68-27.37 12.66-4.31 1.86-8.64 3.69-12.97 5.52l-6.21 2.61c-0.62 0.26-6.11 2.95-6.35 2.69-6.7-6.74-13.43-13.09-19.82-19.12-9.85-9.3-20.21-18.51-30.23-27.42-7.45-6.63-14.99-13.33-22.43-20.17-15.9-14.61-31.41-29.88-44.9-46.5-9.57-11.8-16.36-25.1-19.89-38.54-2.23-8.48-3.18-17.02-2.69-25.26 1.2-20.08 11.78-38.85 29.79-52.86 3.13-2.44 6.45-4.74 9.92-6.91h-8.99c-1.36 0.97-2.7 1.95-4 2.96-19.17 14.91-30.43 34.98-31.72 56.51-0.5 8.35 0.38 16.98 2.51 25.56 3.62 14.56 10.86 28.97 21.18 41.69 12.55 15.47 26.77 29.73 41.41 43.35 8.76 8.15 17.68 16.08 26.48 23.91 9.99 8.89 20.33 18.08 30.12 27.32 5.9 5.57 12.11 11.43 18.3 17.61-11.25 4.84-22.54 9.92-33.43 15.56-0.41 0.21-0.81 0.43-1.22 0.64-25.66 13.38-50.59 29.45-74.12 47.79-7.04 5.49-13.5 11.15-19.21 16.84-6.82 6.8-12.56 13.57-17.3 20.4-4.53 6.52-8.15 13.11-10.92 19.85-9.51 23.15-6.64 47.57 6.13 65.19h6.36c-13.7-16.41-17.24-40.49-7.87-63.29 3.03-7.38 7.15-14.58 12.44-21.75 4.16-5.63 9.04-11.23 14.69-16.86 5.56-5.54 11.87-11.08 18.75-16.44 23.66-18.45 48.75-34.57 74.56-47.94 2.51-1.3 5.04-2.56 7.59-3.8 8.98-4.38 18.17-8.46 27.32-12.38 3.9 3.99 7.78 8.12 11.55 12.38 17.67 20 32.97 43.11 37.78 70.35 0.87 4.9 1.37 9.81 1.53 14.69 0.76 22.66-5.93 44.79-19.16 62.36-6.96 9.24-15.58 16.68-24.85 22.68h8.78c7.41-5.49 14.27-11.98 20.06-19.67 13.88-18.44 20.92-41.63 20.16-65.36-0.16-5.18-0.69-10.38-1.61-15.56-4.75-26.89-19.14-49.7-36.06-69.48-4.29-5.02-8.74-9.84-13.25-14.48 2.81-1.19 5.62-2.37 8.41-3.55 9.89-4.17 19.72-8.51 29.44-13.07 6-2.81 11.98-5.69 17.89-8.69v-5.47c-2.19 1.17-4.39 2.33-6.6 3.47z"
            fill="#fff"
          />
          <g fill="#0f4988">
            <path d="m176.62 451.99c-1.37 0.97-2.75 1.93-4.15 2.83-16.44 10.64-34.96 16.73-49.97 20.18-19.94 4.59-58.03 9.71-89.15-7.59-5.97-3.32-11.06-7.61-15.23-12.6-0.77-0.92-1.5-1.87-2.2-2.83h-6.08c0.62 0.96 1.25 1.91 1.92 2.83 4.95 6.83 11.38 12.64 19.16 16.97 17.33 9.64 36.61 12.65 53.97 12.65 15.27 0 29.07-2.34 38.72-4.56 17.33-3.99 39.19-11.4 57.63-25.06 1.23-0.91 2.44-1.86 3.64-2.83h-8.27z" />
            <path d="m237.65 29.624c-2.26-4.5-5.37-8.57-9.33-12.03-12.21-10.65-30.79-16.34-56.82-17.4-44-1.79-85.18 8.9-113.96 29.43-1.3 0.93-2.58 1.87-3.83 2.83h8.5c1.41-0.97 2.85-1.91 4.31-2.83 27.46-17.22 64.88-26.05 104.77-24.43 24.84 1.01 42.41 6.3 53.73 16.17 2.91 2.54 5.2 5.32 6.96 8.26 0.56 0.93 1.06 1.88 1.52 2.83h5.41c-0.39-0.96-0.81-1.91-1.27-2.83z" />
            <path d="m231.53 70.784c-0.61 1.24-0.11 2.74 1.13 3.35 1.23 0.61 2.74 0.11 3.35-1.13 7.52-15.17 7.88-30.92 1.64-43.37h-5.65c7.95 13.22 5.25 29.63-0.46 41.15z" />
          </g>
          <path
            d="m315.57 184.58h-30.96c-7.36 22.02-18.18 32.06-28.1 42.91l16.73-12.14 26.16 18.99-9.98-30.74 26.14-19.01z"
            fill="#00adea"
          />
          <path
            d="m273.43 153.87-10 30.74h-32.32l26.14 19.02s-7.11 9.87-11.99 15.69c-5.75 6.87-18.97 19.95-18.97 19.95 25.62-11.81 48.76-39.23 56.88-55.44l-9.75-29.96z"
            fill="#0f4988"
          />
        </svg>
      </div>
      <div className="py-10 pr-16">
        <div className="flex flex-col w-full space-y-2">
          {links.map((link, index) => (
            <Link href={link.url} key={link.url}>
              <a
                className={`block px-6 py-5 text-white text-lg group ${
                  background[index % 5]
                }`}
              >
                <div className="flex items-center space-x-4">
                  <PlusIcon className="w-6 h-6 transition transform group-hover:rotate-90" />
                  <span>{link.text}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Component;
