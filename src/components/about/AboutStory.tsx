"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3 
  });

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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-4 text-gris-primary leading-relaxed"
    >
      <motion.p variants={textVariants}
      >
        Founded in 1990, our furniture company began as a small
        workshop with a simple mission: to create beautiful,
        functional furniture that enhances people{"'"}s lives. What
        started as a passion project has grown into a trusted name in
        premium furniture design.
      </motion.p>
      <motion.p variants={textVariants}>
        We believe that furniture is more than just functional objects
        – they{"'"}re the foundation of memories, the backdrop to life
        {"'"}s most important moments. Every piece we create is
        designed with this philosophy in mind, combining timeless
        aesthetics with modern functionality.
      </motion.p>
      <motion.p variants={textVariants}>
        Today, we continue to honor our founding principles while
        embracing innovation and sustainability. Our commitment to
        quality craftsmanship and customer satisfaction remains
        unwavering as we look toward the future.
      </motion.p>
    </motion.div>
  );
}