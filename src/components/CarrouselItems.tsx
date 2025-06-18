"use client";

import React, { useState, useEffect } from "react";
import ItemSection from "./ItemSection";
import { ItemArr } from "@/lib/definitions";

export default function CarrouselItems() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const itemsArr: ItemArr[] = [
    {
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      urlDesktop: "/assents/images/desktop-image-hero-1.jpg",
      urlMobile: "/assents/images/mobile-image-hero-1.jpg",
    },
    {
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      urlDesktop: "/assents/images/desktop-image-hero-2.jpg",
      urlMobile: "/assents/images/mobile-image-hero-2.jpg",
    },
    {
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      urlDesktop: "/assents/images/desktop-image-hero-3.jpg",
      urlMobile: "/assents/images/mobile-image-hero-3.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemsArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsArr.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {itemsArr.map((item: ItemArr, index) => (
          <div key={`${item.title}-${index}`} className="w-full flex-shrink-0">
            {/* <ItemSection {...item} onNext={nextSlide} onPrev={prevSlide} /> */}
            <ItemSection  description={item.description} title={item.title} urlDesktop={item.urlDesktop} urlMobile={item.urlMobile} onNext={nextSlide} onPrev={prevSlide} />
          </div>
        ))}
      </div>
    </div>
  );
}
