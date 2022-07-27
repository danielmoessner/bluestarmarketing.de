import PropTypes from "prop-types";
import Link from "./TranslatedLink";
import ChildrenData from "../types/ChildrenData";
import { useRef } from "react";

function Component({
  // element
  element,
  // attrs
  href,
  target,
  type,
  // style
  secondary,
  // size
  size,
  // color
  color,
  primaryColor,
  secondaryColor,
  // ring
  ring,
  ringOffset,
  // className
  className,
  // other
  children,
}) {
  const Tag = element === "Link" ? Link : element;

  let attrs = {};
  if (element === "Link") {
    attrs = {
      href,
    };
  } else if (element === "button") {
    attrs = {
      type,
    };
  } else if (element === "a") {
    attrs = {
      href,
      target,
    };
  }

  let bColor = "";
  if (secondary) {
    bColor = color || secondaryColor;
  } else {
    bColor = color || primaryColor;
  }

  const bClassName =
    className ||
    `inline-flex text-center items-center border-2 border-transparent w-full font-medium block text-center ${ring} ${ringOffset} ${size} ${bColor} group-hover:pl-3 group-hover:pr-9 transition-all duration-500 outline-none focus:outline-none !shadow-none`;

  const button = useRef(null);

  const mouseEnterHandler = () => {
    const width = button.current.clientWidth;
    const height = button.current.clientHeight;

    const t = width / 2 + height,
      n = 2 * (width + height) - 15;

    const svg = button.current.querySelector(".button-svg--rect");

    svg.style.strokeDasharray = "15, " + n;
    svg.style.strokeDashoffset = t;
  };

  const mouseLeaveHandler = () => {
    const svg = button.current.querySelector(".button-svg--rect");

    svg.style.strokeDasharray = null;
    svg.style.strokeDashoffset = null;
  };

  return (
    <div
      ref={button}
      className="relative table whitespace-pre group button-svg--wrapper"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <style jsx global>
        {`
          .button-svg--rect {
            stroke: #162259;
            stroke-width: 3;
            stroke-dasharray: 422, 0;
            transition: all 0.45s linear 0s;
          }
          .button-svg--wrapper:hover .button-svg--rect {
            stroke: #00adea;
            stroke-dasharray: 15, 610;
            // stroke-dasharray: 15, 741;
            stroke-dashoffset: 190;
            stroke-dashoffset: 219.5;
            stroke-width: 5;
            transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
          }
        `}
      </style>
      <svg className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none button-svg">
        <rect
          className="button-svg--rect"
          x="0"
          y="0"
          fill="none"
          width="100%"
          height="100%"
        ></rect>
      </svg>
      {element === "Link" ? (
        <Link href={href}>
          <a className={bClassName}>{children}</a>
        </Link>
      ) : (
        <Tag className={bClassName} {...attrs}>
          <span>{children}</span>
        </Tag>
      )}
      <div className="absolute top-0 bottom-0 flex items-center justify-center my-auto transition-all duration-700 opacity-0 pointer-events-none right-0.5 group-hover:opacity-100">
        <svg
          className="w-6 h-6"
          data-name="Ebene 1"
          version="1.1"
          viewBox="0 0 15 14.35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15 5.16h-5.2c-1.24 3.7-3.06 5.39-4.72 7.21l2.81-2.04 4.39 3.19-1.68-5.16 4.39-3.19z"
            fill="#00adea"
          />
          <path
            d="m7.92 0-1.68 5.16h-5.43l4.39 3.2s-1.2 1.66-2.01 2.64c-0.97 1.15-3.19 3.35-3.19 3.35 4.3-1.98 8.19-6.59 9.56-9.31z"
            fill="#0f4988"
          />
          <rect width="15" height="14.35" fill="none" />
        </svg>
      </div>
    </div>
  );
}

Component.defaultProps = {
  // element
  element: "Link",
  // attrs
  to: "/",
  href: "#",
  type: "submit",
  target: "_self",
  // style
  secondary: false,
  // size
  size: "px-6 py-1 text-lg",
  // color
  color: null,
  primaryColor: "text-bsm-nightblue bg-transparent hover:bg-transparent",
  secondaryColor:
    "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500",
  // ring
  ring: "focus:outline-none",
  ringOffset: "",
  // className
  className: null,
};

Component.propTypes = {
  // element
  element: PropTypes.oneOf(["a", "button", "Link"]),
  // attrs
  href: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  // style
  // style: PropTypes.oneOf(["primary", "secondary"]),
  secondary: PropTypes.bool,
  // size
  size: PropTypes.string,
  // color
  color: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  // ring
  ring: PropTypes.string,
  ringOffset: PropTypes.string,
  // classname
  className: PropTypes.string,
  // other
  children: ChildrenData.isRequired,
};

export default Component;
