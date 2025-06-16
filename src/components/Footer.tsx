import { LinkProps } from "@/lib/definitions";
import React from "react";

export default function Footer() {
  return (
    <div className="relative bottom-5 sm:right-1/3 text-xs text-center text-black sm:text-white ">
      <span>Challenge by </span>
      <Link
        name="Frontend Mentor"
        url="https://www.frontendmentor.io?ref=challenge"
      />

      <span>Coded by </span>
      <Link
        name="Javier Espindola"
        url="https://github.com/Micolash89?tab=repositories"
      />
    </div>
  );
}

export function Link({ name, url }: LinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="hover:underline hover:text-neutral-600 dark:hover:text-neutral-400"
    >
      <span>{name}.</span>
    </a>
  );
}
