import React from "react";
import HeadingStar from "./HeadingStar";

interface Props {
  element?: "h1" | "h2" | "h3" | "header" | "div";
  size?: "h1" | "h2" | "h3" | "header";
  color?: string;
  classes?: string;
  children: React.ReactNode;
  showStar?: boolean;
}

function Component({
  element = "h2",
  size = "h2",
  color = "text-bsm-nightblue",
  children,
  classes = "",
  showStar = false,
}: Props) {
  const Tag = element;

  let allClasses = classes;
  if (size === "h1") {
    allClasses = `inline-block text-4xl tracking-tight sm:text-5xl lg:text-6xl ${classes} ${color}`;
  } else if (size === "h2") {
    allClasses = `text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${classes} ${color}`;
  } else if (size === "h3") {
    allClasses = `text-2xl uppercase tracking-wide sm:text-3xl lg:text-4xl ${color}`;
  } else if (size === "header") {
    allClasses = `text-2xl tracking-tight sm:text-3xl lg:text-3xl ${classes} ${color}`;
  }

  return (
    <Tag className={`relative ${allClasses}`}>
      {children}
      <span className="relative">
        {size === "h1" && (
          <div className="absolute flex items-center justify-center mx-auto pointer-events-none top-3 -right-7 sm:top-6 md:top-5 md:-right-8 lg:-right-10 lg:top-6">
            <HeadingStar />
          </div>
        )}
        {showStar && size === "h3" && (
          <div className="absolute flex items-center justify-center mx-auto pointer-events-none lg:top-0 top-2 -right-7 md:-right-8 lg:-right-11">
            <HeadingStar />
          </div>
        )}
      </span>
    </Tag>
  );
}

export default Component;
