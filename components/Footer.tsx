import React from "react";
import Link from "./TranslatedLink";
import Container from "./Container";
import Image from "next/image";

function Component({ data }) {
  return (
    <footer className="" aria-labelledby="footerHeading">
      <div className="w-full pl-10">
        <Image
          src={data.lineImage}
          className="w-full h-auto ml-auto max-w-7xl"
          alt={data.row1.copyright}
        />
      </div>
      <div className="bg-white border-t">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <Container layout="sm">
          <div className="mt-4 mb-4">
            <div className="-mx-2.5 -my-1">
              <div className="flex flex-wrap items-center">
                <div className="pr-6">{data.row1.copyright}</div>
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
