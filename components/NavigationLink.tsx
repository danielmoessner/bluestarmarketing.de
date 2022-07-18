import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "gatsby";
import Link from "next/link";
// import { Transition } from '@headlessui/react';

function Component({ link }) {
  return (
    <>
      <div className="relative group">
        <Link href={link.url}>
          <a className="hidden px-3 py-1 text-base font-bold rounded-md md:block focus:outline-none">
            {link.text}
            <span className="relative inline-block">
              <div className="absolute w-20 ml-auto -top-3 right-[-1.125rem]">
                <div className="w-0 overflow-hidden transition-all duration-500 group-hover:w-20">
                  <svg
                    className="w-20"
                    enableBackground="new 0 0 83.4 26"
                    version="1.1"
                    viewBox="0 0 83.4 26"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m83.4 5.2h-5.2c-1.2 3.7-3.1 5.4-4.7 7.2l2.8-2 4.4 3.2-1.7-5.2z"
                      fill="#00adea"
                    />
                    <path
                      d="m76.3 0-1.7 5.2h-5.4l4.4 3.2s-1.2 1.7-2 2.6c-1 1.2-3.2 3.4-3.2 3.4 4.3-2 8.2-6.6 9.6-9.3z"
                      fill="#0f4988"
                    />
                    <path
                      d="m15.5 23.4c10.4 1.6 19.7 1.7 30.1-0.1 2.6-0.5 5.1-1.1 7.7-1.8 2.5-0.8 5-1.7 7.3-2.8 2.4-1.1 4.7-2.4 6.8-3.9s4.1-3.2 5.8-5.2c0.5-0.6 1-0.8 1.2-0.7s0.2 0.7-0.4 1.3c-1.8 2-3.8 3.8-6 5.3s-4.5 2.8-7 3.9c-2.4 1.1-4.9 2-7.5 2.8-2.6 0.7-5.1 1.3-7.8 1.8-10.5 1.7-19.9 1.4-30.3-0.2-1.3-0.2-1.8-0.4-1.8-0.4s0.7-0.2 1.9 0"
                      fill="#0f4988"
                    />
                    <path
                      d="m1.2 20.8c6.5 1.8 12.5 3.1 19.1 3.9s13.4 1.1 20 0.6c3.3-0.3 6.6-0.8 9.9-1.5s6.5-1.7 9.5-3c3.1-1.3 6.1-2.8 8.8-4.7 2.8-1.9 5.3-4 7.5-6.5 0.7-0.8 1.1-1.2 1.3-1.1 0.1 0.1 0 0.7-0.8 1.5-2.2 2.6-4.9 4.7-7.7 6.6s-5.8 3.4-8.9 4.7-6.4 2.2-9.6 3c-3.3 0.7-6.6 1.2-10 1.4-6.6 0.5-13.3 0.2-20-0.7s-12.7-2.2-19.2-4c-0.7-0.2-1.1-0.4-1.1-0.4s0.5 0 1.2 0.2"
                      fill="#00adea"
                    />
                  </svg>
                </div>
              </div>
            </span>
          </a>
        </Link>
        <div className="md:hidden">
          <Link href={link.url}>
            <a className="text-base font-bold">{link.text}</a>
          </Link>
        </div>
      </div>
    </>
  );
}

// Component.defaultProps = {};

// Component.propTypes = {
//   link: PropTypes.shape({
//     url: PropTypes.string,
//     text: PropTypes.string,
//   }).isRequired,
// };

export default Component;
