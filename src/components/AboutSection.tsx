import Image from "next/image";
import AboutSectionItem from "./AboutSectionItem";

export default function AboutSection() {
  return (
    <section className="flex flex-col text-black bg-white sm:flex-row">
      <ImageItem url="/assents/images/image-about-dark.jpg" alt="about dark" />
      <AboutSectionItem />
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
