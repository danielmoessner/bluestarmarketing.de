import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";
import HeadingStar from "./HeadingStar";

function Component({ element, size, color, children, classes }) {
  const Tag = element;

  let allClasses = classes;
  if (size === "h1") {
    allClasses = `relative text-3xl tracking-tight sm:text-4xl lg:text-6xl ${classes} ${color}`;
  } else if (size === "h2") {
    allClasses = `text-2xl tracking-tight sm:text-3xl lg:text-3xl ${classes} ${color}`;
  } else if (size === "h3") {
    allClasses = `text-xl ${color}`;
  }

  return (
    <Tag className={allClasses}>
      {children}
      {size === "h1" && (
        <div className="absolute right-0 flex items-center justify-center mx-auto left-[10%] top-5 pointer-events-none">
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
};

Component.propTypes = {
  element: PropTypes.string,
  size: PropTypes.oneOf(["h1", "h2", "h3"]),
  color: PropTypes.string,
  classes: PropTypes.string,
  children: ChildrenData.isRequired,
};

export default Component;
