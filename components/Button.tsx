import PropTypes from "prop-types";
import Link from "next/link";
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
    `inline-flex text-center items-center border-2 border-transparent font-medium ${ring} ${ringOffset} ${size} ${bColor}`;

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
      className="relative table button-svg--wrapper"
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
  size: "px-6 py-3 text-lg",
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
