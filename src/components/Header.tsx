import { ItemHeaderProps } from "@/lib/definitions";
import Image from "next/image";

export default function Header() {

  const itemsArr: ItemHeaderProps[] = [
    { title: "Home", url: "#" },
    { title: "Shop", url: "#" },
    { title: "About", url: "#" },
    { title: "Contact", url: "#" },
  ];

  return (
    <header className="relative top-0 left-0 w-full">
      <nav className="flex items-center px-4 py-2">
        <a className="flex items-center justify-center mr-8" href="#">
          <Image
            className="object-contain"
            src="/assents/images/logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </a>
        <ul className="flex gap-11 items-center">
          {itemsArr.map((item: ItemHeaderProps, index) => (
            <LinkHeader key={item.title+index+"header"} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function LinkHeader({ title, url }: ItemHeaderProps) {
  return (
    <li className="relative">
      <a 
        href={url}
        className="lowercase font-bold py-2 px-1 block transition-all duration-300 ease-in-out hover:cursor-pointer relative group"
      >
        <span>{title}</span>
        {/* Línea de subrayado animada */}
        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </a>
    </li>
  );
}