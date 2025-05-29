"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousell.module.css";

const images = [
  "/dog-pics/dog-pic-1.jpg",
  "/dog-pics/dog-pic-2.jpg",
  "/dog-pics/dog-pic-3.jpg",
];

const Carousell: React.FC = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const IMAGE_WIDTH = 375;
  const GAP = 16;
  const fullItemWidth = IMAGE_WIDTH + GAP;

  const handleScroll = () => {
    if (!viewportRef.current) return;

    const scrollLeft = viewportRef.current.scrollLeft;
    const index = Math.round(scrollLeft / fullItemWidth);
    setCurrent(index);
  };

  const scrollToIndex = (index: number) => {
    if (!viewportRef.current) return;

    viewportRef.current.scrollTo({
      left: index * fullItemWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ref = viewportRef.current;
    if (!ref) return;

    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = (prev + 1) % images.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.carousel}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`Dog ${index + 1}`}
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.active : ""
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousell;
