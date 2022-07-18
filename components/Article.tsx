import Image from "next/image";
import React from "react";
import ArticleMeta from "./ArticleMeta";

function Component({ image, article, children }) {
  return (
    <div>
      <div className="leading-[0px]">
        <Image {...image} alt="test" />
      </div>
      <h2 className="mt-5 text-2xl font-bold lg:mt-4 lg:text-3xl">
        {article.title}
      </h2>
      <div className="mt-1 lg:mt-2">
        <ArticleMeta article={article} />
      </div>
      <div className="">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Component;
