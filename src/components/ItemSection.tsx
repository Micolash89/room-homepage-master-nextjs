import {  ItemSectionProps } from "@/lib/definitions";
import Image from "next/image";
import { motion } from "framer-motion";


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

export default function ItemSection({
  title,
  description,
  urlDesktop,
  urlMobile,
  onNext,
  onPrev,
}: ItemSectionProps) {
  return (
    <>
      <section className="flex flex-col sm:flex-row bg-white text-black sm:w-full">
        <div className="relative w-full sm:w-1/2 lg:w-3/5">
          <div className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3] w-full overflow-hidden">
            <Image
              src={urlDesktop}
              className="hidden lg:block object-cover"
              alt="hero-Desktop"
              fill
              sizes="(max-width: 1024px) 0px, 60vw"
              priority
            />
            <Image
              src={urlMobile}
              className="lg:hidden object-cover"
              alt="hero-Mobile"
              fill
              sizes="(max-width: 1024px) 100vw, 0px"
              priority
            />
          </div>
          <div className="absolute bottom-0 right-0 -translate-x-0 -translate-y-0 flex  bg-black sm:-right-[9.75rem]">
            <ButtonItemArrow
              url="/assents/images/icon-angle-left.svg"
              name="arrow-left"
              onClick={onPrev}
            />
            <ButtonItemArrow
              url="/assents/images/icon-angle-right.svg"
              name="arrow-right"
              onClick={onNext}
            />
          </div>
        </div>

        <motion.div 
          className="flex flex-col gap-5 sm:gap-7 items-center px-6 py-14 sm:px-14 sm:py-20 sm:w-1/2 lg:w-2/5 sm:justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="font-bold text-5xl w-full sm:max-w-lg text-balance self-start"
            variants={textVariants}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-balance leading-relaxed text-sm text-gris-primary font-bold max-w-3xl "
            variants={textVariants}
          >
            {description}
          </motion.p>
          
          <motion.a 
            href="#" 
            className="flex gap-2 text-sm self-start"
            variants={textVariants}
          >
            <span className="tracking-[1rem] uppercase hover:text-gris-primary transition-colors duration-300 font-bold text-xl">
              Shop now
            </span>
            <Image
              src="/assents/images/icon-arrow.svg"
              alt="arrow-link"
              width={50}
              height={50}
            />
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export function ButtonItemArrow({
  url,
  name,
  onClick,
}: {
  url: string;
  name: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      className="p-8 hover:bg-gris-secondary cursor-pointer transition-colors duration-200"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src={url} alt={name} width={15} height={12} />
    </motion.button>
  );
}