import Image from "next/image";
import React from "react";
import ArticleMeta from "./ArticleMeta";

function Component({ image, article, children }) {
  return (
    <div>
      <div className="leading-[0px]">
        <Image {...image} alt="test" />
      </div>
      <h2 className="mt-10 text-5xl font-bold">{article.title}</h2>
      <div className="mt-3">
        <ArticleMeta article={article} />
      </div>
      <div className="mt-5">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Component;
