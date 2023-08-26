import React, { useState, useEffect, useRef } from "react";

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
        <svg
          className="w-28 md:w-36 lg:w-48"
          id="a"
          data-name="Ebene 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250.1 77.91"
        >
          <defs>
            <clipPath id="b">
              <rect x="0" width="250.1" height="77.91" fill="none" />
            </clipPath>
          </defs>
          <g clipPath="url(#b)">
            <path
              d="M250.1,15.48h-15.6c-3.71,11.1-9.17,16.16-14.16,21.63l8.43-6.12,13.18,9.57-5.03-15.49,13.18-9.58Z"
              fill="#00adea"
            />
            <path
              d="M228.86,0l-5.04,15.49h-16.29l13.18,9.59s-3.59,4.97-6.04,7.91c-2.9,3.47-9.56,10.06-9.56,10.06,12.91-5.95,24.58-19.77,28.67-27.94L228.86,0Z"
              fill="#0f4988"
            />
            <path
              d="M46.42,70.06c31.27,4.66,59.15,5.07,90.29-.29,7.76-1.4,15.44-3.21,22.99-5.47,7.54-2.28,14.9-5.11,22.01-8.45,7.1-3.36,13.97-7.22,20.34-11.79,6.36-4.54,12.37-9.67,17.39-15.57,1.61-1.93,2.89-2.49,3.53-2.07,.64,.42,.49,2.01-1.25,4.01-5.32,6.12-11.53,11.29-18.09,15.88-6.57,4.6-13.61,8.46-20.86,11.8-7.26,3.32-14.76,6.11-22.42,8.34-7.66,2.21-15.44,3.95-23.29,5.29-31.48,5.08-59.62,4.33-90.91-.66-3.92-.64-5.48-1.34-5.48-1.34,0,0,2.31-.11,5.74,.32"
              fill="#0f4988"
            />
            <path
              d="M3.66,62.33c19.36,5.44,37.39,9.22,57.32,11.78,19.93,2.54,40.1,3.32,60.12,1.82,9.99-.91,19.94-2.32,29.73-4.47,9.78-2.2,19.38-5.18,28.65-8.97,9.25-3.81,18.2-8.41,26.46-14.03,8.27-5.58,16.01-12.06,22.47-19.62,2.08-2.47,3.35-3.51,3.78-3.23,.43,.27-.09,2-2.26,4.52-6.67,7.71-14.55,14.23-22.97,19.84-8.41,5.66-17.49,10.25-26.85,14.05-9.38,3.78-19.08,6.73-28.94,8.89-9.88,2.12-19.89,3.48-29.95,4.34-20.13,1.41-40.37,.5-60.34-2.15-19.98-2.67-38.1-6.58-57.46-12.14-2.08-.63-3.42-1.29-3.42-1.29,0,0,1.57,.16,3.66,.65"
              fill="#00adea"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Component;
