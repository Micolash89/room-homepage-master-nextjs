import { ItemSectionProps } from "@/lib/definitions";
import Image from "next/image";

export default function ItemSection({
  title,
  description,
  url,
}: ItemSectionProps) {
  return (
    <>
      <section>
        <div>
          <Image src={url} alt="hero" width={500} height={500} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#">
          <span>Shop now</span>
        </a>
      </section>
    </>
  );
}
