import { ItemArr } from "@/lib/definitions";
import Image from "next/image";

export default function ItemSection({
  title,
  description,
  urlDesktop,
  urlMobile,
}: ItemArr) {
  return (
    <>
      <section className="flex flex-col  bg-white text-black">
        <div className="relative">
          <Image
            src={urlDesktop}
            className="hidden lg:block"
            alt="hero-Desktop"
            width={500}
            height={500}
          />
          <Image
            src={urlMobile}
            className="lg:hidden"
            alt="hero-Mobile"
            width={500}
            height={500}
          />
          <div className="absolute bottom-0  right-0 -translate-x-0 -translate-y-0 flex gap-4 bg-black ">
            {/* <button>
              <Image src="/assents/images/icon-angle-left.svg" alt="arrow-left" width={15} height={15}/>
            </button>
            <button>
              <Image src="/assents/images/icon-angle-right.svg" alt="arrow-right" width={15} height={15}/>

            </button> */}
            <ButtonItemArrow
              url="/assents/images/icon-angle-left.svg"
              name="arrow-left"
            />
            <ButtonItemArrow
              url="/assents/images/icon-angle-right.svg"
              name="arrow-right"
            />
          </div>
        </div>

<div className="flex flex-col gap-7 items-center px-6 py-14 ">

        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="text-balance text-grey-primary font-bold">{description}</p>
        <a href="#" className="flex gap-2 text self-start ">
          <span className=" tracking-[0.6rem]  uppercase">Shop now</span>
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

export function ButtonItemArrow({ url, name }: { url: string; name: string }) {
  return (
    <button className="p-5">
      <Image src={url} alt={name} width={10} height={10} />
    </button>
  );
}
