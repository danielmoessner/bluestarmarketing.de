import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Carousel({ images, delay = 5000 }) {
  const [imgIndex, setImgIndex] = useState(0);

  const getNext = (index, length) => {
    return (index + 1) % length;
  };

  useEffect(() => {
    const next = () => {
      setImgIndex(getNext(imgIndex, images.length));
    };

    let fader;
    if (images.length > 1) {
      fader = setTimeout(() => {
        next();
      }, delay);
      return () => {
        clearTimeout(fader);
      };
    }
  }, [imgIndex, delay, images.length]);

  return (
    <div className="aspect-[800/535] relative w-full">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={
            "absolute inset-0 duration-1000 ease-in transition-opacity " +
            (imgIndex === index ? "opacity-100" : "opacity-0")
          }
        >
          <Image key={index} {...image} alt="" />
        </div>
      ))}
    </div>
  );
}
