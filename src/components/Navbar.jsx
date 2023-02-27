"use client"
// import { useRouter } from "next/router";
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { navLinksDATA } from './Data'
import Link from 'next/link';


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const pathname = usePathname();

  const SearchParams = useSearchParams()

  // console.log("goyo - useRouter()", useRouter())
  const NavLink = ({ href, children }) => {
    //const pathname = usePathname();

    // Decida si el enlace va a un ancla en la misma página marcando
    // si el enlace tiene un hash y si el href sin hash coincide con la ruta actual.

    const isHashLinkOnSamePage =
      href.indexOf("#") > -1 && href.split("#")[0] === pathname;


    // Solo registra un controlador onclick si el enlace va a un hash en la página actual
    const onClick = !isHashLinkOnSamePage
      ? undefined
      : () => {
        //const hash = "#" + href.split('#')[1]
        document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
        //document.querySelector(hash);
      };

    return (
      <Link
        href={href}
        onClick={onClick}
        className="hover:text-Teal hover:font-black"

      >
        {children}
      </Link>
    );
  };

  return (
    <div className="shadow-lg bg-Solitude fixed w-full top-0 left-0 z-20">

      {/* <div> */}
      <div
        className={`${active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
      >
        {/* //LOGO */}
        <div className="flex items-center gap-4">
          <HiMenuAlt1
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setToggle(true)}
          />
          <div className="text-xl text-Teal uppercase tracking-wide font-bold">
            Logo
          </div>
        </div>

        <ul className="hidden items-center sm:flex">
          {navLinksDATA.map((navLink) => {
            return (
              <li key={navLink.id} className="mr-8 cursor-pointer list-none">
                <NavLink href={navLink.href}>{navLink.link}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div >
  )
}


