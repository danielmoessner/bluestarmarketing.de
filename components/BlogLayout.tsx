import Image from "next/image";
import Button from "../components/Button";
import Link from "./TranslatedLink";

function Component({ children, categories, aside, current, archiv = "---" }) {
  return (
    <div className="grid grid-cols-4 gap-16">
      <div className="col-span-4 md:col-span-3">{children}</div>
      <div className="col-span-4 row-start-1 md:row-start-auto md:col-span-1">
        <aside>
          <div>
            <h2 className="text-xl font-bold lg:text-2xl">
              {aside.categories}
            </h2>
            <ul className="mt-4 space-y-2">
              {categories.map((category) => (
                <li key={category.title}>
                  <Link
                    href={`/starnews?c=${encodeURIComponent(category.title)}`}
                  >
                    <a
                      className={
                        category.title.includes(current) ? "underline" : ""
                      }
                    >
                      {category.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            {/*  archiv link */}
            <div className="mt-2">
              <a
                href={"/starnews?archiv"}
                className={archiv.includes(current) ? "underline" : ""}
              >
                Archiv
              </a>
            </div>
          </div>

          <div className="hidden mt-20 md:block">
            <Image {...aside.image} alt={aside.title} />
            <h2 className="mt-5 font-bold">
              {aside.title}
              <span className="pl-1">
                <svg
                  className="inline-block w-5 h-5"
                  data-name="Ebene 1"
                  version="1.1"
                  viewBox="0 0 15 14.35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15 5.16h-5.2c-1.24 3.7-3.06 5.39-4.72 7.21l2.81-2.04 4.39 3.19-1.68-5.16 4.39-3.19z"
                    fill="#00adea"
                  />
                  <path
                    d="m7.92 0-1.68 5.16h-5.43l4.39 3.2s-1.2 1.66-2.01 2.64c-0.97 1.15-3.19 3.35-3.19 3.35 4.3-1.98 8.19-6.59 9.56-9.31z"
                    fill="#0f4988"
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-4">{aside.text}</p>
            <div className="mt-5">
              <Button href={aside.cta.url}>{aside.cta.text}</Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Component;
