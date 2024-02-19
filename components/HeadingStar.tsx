import React, { useState, useEffect, useRef } from "react";
import Star from "./Star";

function Component() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          setShow(true);
        }
      },
      {
        threshold: 1,
        rootMargin: "0px 0px -20% 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="relative h-16 w-28 md:w-36 lg:w-48">
      {/* <button onClick={() => setShow(true)}>click</button> */}
      <div
        className={`${
          show ? "w-28 md:w-36 lg:w-48" : "w-0"
        } overflow-hidden transition-all duration-700 ease-in-out delay-500`}
      >
        <Star />
      </div>
    </div>
  );
}

export default Component;
