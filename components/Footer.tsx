import React from "react";
import Link from "./TranslatedLink";
import Container from "./Container";
import Image from "next/image";

function Component({ data }) {
  return (
    <footer className="" aria-labelledby="footerHeading">
      <div className="w-full">
        <Image
          src={data.lineImage}
          className="w-full h-auto"
          alt={data.row1.copyright}
        />
      </div>
      <div className="bg-white">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <Container layout="sm">
          <div className="mt-6 mb-8">
            <div className="-mx-2.5">
              <div className="flex flex-wrap items-center">
                <div className="pr-6 pl-2.5 py-1">{data.row1.copyright}</div>
                <button
                  className="text-base font-bold whitespace-pre-line px-2.5 py-1"
                  onClick={() => {
                    window.CCM.openWidget();
                  }}
                >
                  {data.cookie}
                </button>
                {data.row2.map((item) => {
                  let element = <div>?</div>;
                  if (item.type === "text")
                    element = (
                      <div
                        className="text-base font-bold whitespace-pre-line px-2.5 py-1"
                        key={item.text}
                      >
                        {item.text}
                      </div>
                    );
                  if (item.type === "link")
                    element = (
                      <Link key={item.url} href={item.url}>
                        <a className="text-base font-bold hover:text-gray-900 px-2.5 py-1">
                          {item.text}
                        </a>
                      </Link>
                    );
                  if (item.type === "externalLink")
                    element = (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        className="text-base font-bold hover:text-gray-900 px-2.5 py-1"
                        rel="noreferrer"
                      >
                        {item.text}
                      </a>
                    );
                  return element;
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Component;
