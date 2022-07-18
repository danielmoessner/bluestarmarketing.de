import React from "react";

function Component({ article, size = "text-lg", dividerSize = "text-base" }) {
  return (
    <div className={size}>
      <div className="flex space-x-2">
        <time className="">
          {new Date(article.date).toLocaleDateString("de-de")}
        </time>
        {article.categories.map((c) => (
          <React.Fragment key={c}>
            <span className={dividerSize}>|</span>
            <span className="">{c}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Component;
