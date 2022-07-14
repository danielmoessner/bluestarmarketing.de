import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";
import HeadingStar from "./HeadingStar";

function Component({ element, size, color, children, classes, showStar }) {
  const Tag = element;

  let allClasses = classes;
  if (size === "h1") {
    allClasses = `inline-block text-3xl tracking-tight sm:text-4xl lg:text-6xl ${classes} ${color}`;
  } else if (size === "h2") {
    allClasses = `text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${classes} ${color}`;
  } else if (size === "h3") {
    allClasses = `text-2xl uppercase tracking-wide sm:text-3xl lg:text-4xl ${color}`;
  } else if (size === "header") {
    allClasses = `text-2xl tracking-tight sm:text-3xl lg:text-3xl ${classes} ${color}`;
  }

  return (
    <Tag className={`relative ${allClasses}`}>
      {children}
      {size === "h1" && (
        <div className="absolute items-center justify-center hidden mx-auto pointer-events-none sm:flex top-3 -right-7 md:top-2 md:-right-8 lg:-right-12 lg:top-5">
          <HeadingStar />
        </div>
      )}
      {showStar && size === "h3" && (
        <div className="absolute flex items-center justify-center mx-auto pointer-events-none lg:top-0 top-2 -right-7 md:-right-8 lg:-right-11">
          <HeadingStar />
        </div>
      )}
    </Tag>
  );
}

Component.defaultProps = {
  element: "h2",
  size: "h2",
  color: "text-bsm-nightblue",
  classes: "",
  showStar: false,
};

Component.propTypes = {
  element: PropTypes.string,
  size: PropTypes.oneOf(["h1", "h2", "h3", "header"]),
  color: PropTypes.string,
  classes: PropTypes.string,
  children: ChildrenData.isRequired,
  showStar: PropTypes.bool,
};

export default Component;
