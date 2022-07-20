import React from "react";

function Component({
  article,
  size = "text-base lg:text-lg",
  dividerSize = "text-sm lg:text-base",
}) {
  return (
    <div className={size}>
      <div className="flex flex-wrap space-x-2">
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
