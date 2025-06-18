import { ItemArr } from "@/lib/definitions";
import Image from "next/image";

interface ItemSectionProps extends ItemArr {
  onNext?: () => void;
  onPrev?: () => void;
}

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
          <div className="absolute bottom-0 right-0 -translate-x-0 -translate-y-0 flex  bg-black sm:-right-[8.5rem]">
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

        <div className="flex flex-col gap-5 items-center px-6 py-14 sm:px-14 sm:py-20 sm:w-1/2 lg:w-2/5 sm:justify-center">
          <h2 className="font-bold text-4xl sm:max-w-lg text-balance">
            {title}
          </h2>
          <p className="text-balance text-gris-primary font-bold max-w-3xl">
            {description}
          </p>
          <a href="#" className="flex gap-2 text self-start">
            <span className="tracking-[0.6rem] uppercase hover:text-gris-primary transition-colors duration-300 font-bold">
              Shop now
            </span>
            <Image
              src="/assents/images/icon-arrow.svg"
              alt="arrow-link"
              width={50}
              height={50}
            />
          </a>
        </div>
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
    <button
      className="p-7 hover:bg-gris-secondary cursor-pointer transition-colors duration-200"
      onClick={onClick}
    >
      <Image src={url} alt={name} width={12} height={10} />
    </button>
  );
}
