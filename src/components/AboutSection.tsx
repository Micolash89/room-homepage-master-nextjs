import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="flex flex-col text-black bg-white sm:flex-row">
      <ImageItem url="/assents/images/image-about-dark.jpg" alt="about dark" />
      <div className="px-6 py-14 max-w-2xl">
        <h3 className="font-bold text-lg mb-4 tracking-[0.6rem] uppercase">
          About our furniture
        </h3>
        <p className="text-balance leading-6">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <ImageItem
        url="/assents/images/image-about-light.jpg"
        alt="about light"
      />
    </section>
  );
}

export function ImageItem({ url, alt }: { url: string; alt: string }) {
  return <Image src={url} alt={alt} width={500} height={500} />;
}
