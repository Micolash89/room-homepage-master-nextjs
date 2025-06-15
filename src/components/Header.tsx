"use client";
import { ItemHeaderProps } from "@/lib/definitions";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const itemsArr: ItemHeaderProps[] = [
    { title: "Home", url: "#" },
    { title: "Shop", url: "#" },
    { title: "About", url: "#" },
    { title: "Contact", url: "#" },
  ];

  const [open, setOpen] = useState(false);



  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center px-4 py-2">
        <div className="flex items-center justify-center mr-8">
          <button type="button" onClick={() => 
            setOpen(!open)}>
            <Image
              className={`object-contain ${open ? "hidden" : "block"} sm:hidden`}
              src="/assents/images/icon-hamburger.svg"
              alt="menu"
              width={20}
              height={20}
              
            />
          </button>

          <button type="button" onClick={() => 
            setOpen(!open)}>
            <Image
              className={`object-contain ${open ? "block" : "hidden"} sm:hidden`}
              src="/assents/images/icon-close.svg"
              alt="menu-close"
              width={20}
              height={20}
              
            />
          </button>

        <a className="flex items-center justify-center mr-8" href="#">
          <Image
            className="object-contain"
            src="/assents/images/logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </a>
            </div>
        
        <ul className={`flex gap-11 items-center `}>
          {itemsArr.map((item: ItemHeaderProps, index) => (
            <LinkHeader key={item.title + index + "header"} {...item} />
          ))}

          {itemsArr.map((item: ItemHeaderProps, index) => (
            <LinkHeaderMobile
              key={item.title + index + "headerMobile"}
              {...item} open={open} index={index}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function LinkHeader({ title, url }: ItemHeaderProps) {
  return (
    <li className="relative hidden sm:block ">
      <a
        href={url}
        className="lowercase font-bold py-2 px-1 block transition-all duration-300 ease-in-out hover:cursor-pointer relative group"
      >
        <span className="text-white">{title}</span>
        {/* Línea de subrayado animada */}
        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </a>
    </li>
  );
}

export function LinkHeaderMobile({ title, url, open = false , index}: {title: string, url: string, open?: boolean, index: number}) {
  return (
    <li className={`absolute  w-full h-full top-0  left-[${index*100}px] ${open ? "block" : "hidden"} items-center justify-center  sm:hidden`}>
      <a
        href={url}
        className="lowercase font-bold py-2 px-1 block transition-all duration-300 ease-in-out hover:cursor-pointer relative group"
      >
        <span className="text-black">{title}</span>
        {/* Línea de subrayado animada */}
        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </a>
    </li>
  );
}
