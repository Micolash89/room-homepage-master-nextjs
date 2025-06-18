"use client";
import { ItemHeaderProps } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const itemsArr: ItemHeaderProps[] = [
    { title: "Home", url: "/" },
    { title: "Shop", url: "/shop" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-5 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <header className="absolute top-0 left-0 sm:ml-6 sm:top-10 w-full sm:w-fit z-10">
        <nav className="flex sm:items-center px-4 py-2">
          <div
            className={`flex sm:hidden items-center justify-center mr-0 mt-12 sm:mr-8`}
          >
            <button
              className="z-20"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <Image
                className={`object-contain ${
                  open ? "hidden" : "block"
                } sm:hidden`}
                src="/assents/images/icon-hamburger.svg"
                alt="menu"
                width={25}
                height={25}
              />
              <Image
                className={`mt-1 object-contain ${
                  open ? "block" : "hidden"
                } sm:hidden`}
                src="/assents/images/icon-close.svg"
                alt="menu-close"
                width={20}
                height={20}
              />
            </button>
          </div>
          <Link
            className="flex relative sm:static top-7 left-1/3 sm:mr-12 items-center justify-center"
            href="/"
          >
            <Image
              className="object-contain"
              src="/assents/images/logo.svg"
              alt="logo"
              width={75}
              height={75}
            />
          </Link>

          <ul className={`gap-11 sm:items-center items-start hidden sm:flex`}>
            {itemsArr.map((item: ItemHeaderProps, index) => (
              <LinkHeader key={item.title + index + "header"} {...item} />
            ))}
          </ul>

          <ul
            className={`absolute top-0 left-0 w-full ${
              open ? "h-36" : "h-0"
            } bg-white gap-11 justify-around align-middle ${
              open ? "flex" : "hidden"
            } sm:hidden z-10`}
          >
            {itemsArr.map((item: ItemHeaderProps, index) => (
              <LinkHeaderMobile
                key={item.title + index + "headerMobile"}
                {...item}
                index={index}
                onClick={() => setOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export function LinkHeader({ title, url }: ItemHeaderProps) {
  return (
    <li className="relative hidden sm:block">
      <Link
        href={url}
        className="lowercase font-bold py-2 px-1 block transition-all duration-300 ease-in-out hover:cursor-pointer relative group"
      >
        <span className="text-white">{title}</span>
        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </Link>
    </li>
  );
}

export function LinkHeaderMobile({
  title,
  url,
  index,
  onClick,
}: {
  title: string;
  url: string;
  index: number;
  onClick?: () => void;
}) {
  return (
    <li
      className={`relative h-full ${
        index == 0 ? "ml-16" : ""
      } flex items-center justify-center`}
    >
      <a
        href={url}
        onClick={onClick}
        className="lowercase font-bold py-2 px-1 block transition-all duration-300 ease-in-out hover:cursor-pointer relative group"
      >
        <span className="text-black">{title}</span>
        <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </a>
    </li>
  );
}
