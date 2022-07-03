import React from "react";
import Link from "next/link";
import Container from "./Container";
import footer from "../content/setting/footer.json";
import Image from "next/image";

function Component() {
  return (
    <footer className="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="flex">
        {footer.images.map((image, index) => (
          <Image
            key={index}
            width={500}
            height={500}
            src={image}
            alt={`Footer Bild ${index}`}
          />
        ))}
      </div>
      <Container layout="sm">
        <div className="my-5">
          <div className="flex flex-col justify-between lg:items-center lg:flex-row">
            <div>{footer.row1.copyright}</div>
            <div>
              <div className="flex hidden space-x-5">
                {footer.row1.content.map((item) => {
                  let element = <div>?</div>;
                  if (item.type === "text")
                    element = (
                      <div className="whitespace-pre-line ">{item.text}</div>
                    );
                  if (item.type === "link")
                    element = (
                      <Link href={item.url}>
                        <a className=" hover:text-gray-900">{item.text}</a>
                      </Link>
                    );
                  if (item.type === "externalLink")
                    element = (
                      <a
                        href={item.url}
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

        <div className="mb-5">
          <div className="flex items-center space-x-5">
            {footer.row2.map((item) => {
              let element = <div>?</div>;
              if (item.type === "text")
                element = (
                  <div className="text-base font-medium whitespace-pre-line">
                    {item.text}
                  </div>
                );
              if (item.type === "link")
                element = (
                  <Link href={item.url}>
                    <a className="text-base font-medium hover:text-gray-900">
                      {item.text}
                    </a>
                  </Link>
                );
              if (item.type === "externalLink")
                element = (
                  <a
                    href={item.url}
                    target="_blank"
                    className="text-base font-medium hover:text-gray-900"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                );
              return element;
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Component;
