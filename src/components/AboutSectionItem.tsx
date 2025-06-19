"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSectionItem() {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-6 py-14 max-w-2xl"
      >
        <motion.h3
          variants={textVariants}
          className="font-bold text-lg mb-4 tracking-[0.6rem] uppercase"
        >
          About our furniture
        </motion.h3>
        <motion.p
          variants={textVariants}
          className="text-balance leading-6 text-gris-primary"
        >
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </motion.p>
      </motion.div>
    </>
  );
}
