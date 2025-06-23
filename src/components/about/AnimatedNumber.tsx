"use client";

import { AnimatedNumberProps } from "@/lib/definitions";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    // Solo animar cuando el elemento esté visible
    if (!isInView) return;

    const start = value > 500 ? value * 0.95 : 0;
    const end = value;
    const duration = 1000;
    const range = end - start;
    let current = start;

    if (end === start) return;

    const increment = end > start ? 1 : -1;
    let stepTime = 0;

    stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      setDisplayValue(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, isInView]); // Agregar isInView como dependencia

  return <span ref={ref} className={className}>{displayValue}+</span>;
}