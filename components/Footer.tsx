import React from "react";
import Link from "next/link";
import Container from "./Container";
// import footerSource from "../content/setting/footer.json";
import Image from "next/image";
// import { ImageTransformed } from "../types/shared";

// interface Props {
//   data: ImageTransformed<typeof footerSource>;
// }

function Component({ data }) {
  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="flex">
        {data.images.map((image, index) => (
          <Image key={index} {...image} alt={`Footer Bild ${index}`} />
        ))}
      </div>
      <Container layout="sm">
        <div className="mt-5">
          <div className="flex flex-col justify-between lg:items-center lg:flex-row">
            <div>{data.row1.copyright}</div>
            <div>
              <div className="flex hidden space-x-5">
                {data.row1.content.map((item) => {
                  let element = <div>?</div>;
                  if (item.type === "text")
                    element = (
                      <div className="whitespace-pre-line" key={item.text}>
                        {item.text}
                      </div>
                    );
                  if (item.type === "link")
                    element = (
                      <Link href={item.url} key={item.url}>
                        <a className=" hover:text-gray-900">{item.text}</a>
                      </Link>
                    );
                  if (item.type === "externalLink")
                    element = (
                      <a
                        href={item.url}
                        key={item.url}
                        target="_blank"
                        className=" hover:text-gray-900"
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
        </div>

        <div className="mt-2 mb-5">
          <div className="-mx-2.5 -my-1">
            <div className="flex flex-wrap items-center">
              <button
                className="text-base font-bold whitespace-pre-line px-2.5 py-1"
                onClick={() => {
                  window.CCM.openWidget();
                }}
              >
                Cookie-Einstellungen
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
    </footer>
  );
}

export default Component;
