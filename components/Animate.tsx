"use client";

import React, { createContext, useContext } from "react";
import { motion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

export function Animate(props) {
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 2 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

// function Animate({ children, className, delay, duration, from, to }) {
//   const [show, setShow] = useState(false);
//   const ref = useRef(null);

//   let transitionDelay = "delay-0";
//   if (delay === 1) transitionDelay = "delay-100";
//   if (delay === 2) transitionDelay = "delay-200";
//   if (delay === 3) transitionDelay = "delay-300";

//   useEffect(() => {
//     // eslint-disable-next-line no-undef
//     const observer = new IntersectionObserver(
//       ([entry], obs) => {
//         if (entry.isIntersecting) {
//           obs.disconnect();
//           setShow(true);
//         }
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "0px 0px -10% 0px",
//       },
//     );
//     if (ref.current) observer.observe(ref.current);

//     // Remove the observer as soon as the component is unmounted
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`
//         transform transition ease-in-out
//         ${duration}
//         ${transitionDelay}
//         ${className}
//         ${show ? to : from}
//         `}
//     >
//       {children}
//     </div>
//   );
// }

// Animate.defaultProps = {
//   className: "",
//   delay: 0,
//   duration: "duration-[2s]",
//   from: "opacity-0 translate-y-0",
//   to: "opacity-100 translate-y-0",
// };

// Animate.propTypes = {
//   children: ChildrenData.isRequired,
//   className: PropTypes.string,
//   delay: PropTypes.oneOf([0, 1, 2, 3]),
//   from: PropTypes.string,
//   to: PropTypes.string,
//   duration: PropTypes.string,
// };

export default Animate;
