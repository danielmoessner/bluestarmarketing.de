import React from "react";
import PropTypes from "prop-types";
import ChildrenData from "../types/ChildrenData";

function Component({ element, size, color, children, classes }) {
  const Tag = element;

  let allClasses = classes;
  if (size === "h1") {
    allClasses = `text-3xl tracking-tight sm:text-3xl lg:text-3xl ${classes} ${color}`;
  } else if (size === "h2") {
    allClasses = `text-2xl tracking-tight sm:text-3xl lg:text-4xl ${classes} ${color}`;
  } else if (size === "h3") {
    allClasses = `text-xl ${color}`;
  }

  return <Tag className={allClasses}>{children}</Tag>;
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
