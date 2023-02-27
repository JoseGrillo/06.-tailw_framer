"use client"
import React, { useEffect, useState } from 'react'
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { navLinksDATA } from './Data'
import Link from 'next/link';


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);



  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

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

        {/* menu */}
        <ul className="sm:flex items-center hidden">
          {
            navLinksDATA.map((navLink) => {
              return (<li key={navLink.id} className="list-none cursor-pointer mr-8"  >
                {navLink.href !== "/contactar" ? (
                  <Link
                    href={navLink.href}
                    className="hover:text-Teal hover:font-black "
                    onClick={() => {
                      document?.querySelector(navLink.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                  </Link>
                ) : (
                  <Link href={navLink.href}
                    className="hover:text-Teal hover:font-black "
                  >
                    {navLink.link}
                  </Link>

                )}
              </li>)
            })
          }
        </ul>

        {/* {toggle && (
            <div>
              {navLinksDATA.map((navLink) => {
                return (<li key={navLink.id} className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"  >
                  <Link href={navLink.href}
                    onClick={(prev) => {
                      setToggle(!prev)
                      document.querySelector(navLink.href).scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  // className=""
                  >{navLink.link}</Link> </li>)
              })}
            </div>
          )} */}
      </div>
      {/* </div> */}
      {/* // </nav > */}
    </div >
  )
}




////////////////////////////

import { useRouter } from "next/router";
import Link from "next/link";

const navLinksDATA = [
  { id: 1, href: "/#about", link: "About" },
  { id: 2, href: "/#services", link: "Services" },
  { id: 3, href: "/contact", link: "Contact" }
];

const NavLink = ({ href, children }) => {
  const { pathname } = useRouter();
  // Decide if link goes to an anchor on the same page by checking
  // whether the link has a hash and if the href without hash matches the current pathname.
  const isHashLinkOnSamePage =
    href.indexOf("#") > -1 && href.split("#")[0] === pathname;

  // Solo registra un controlador onclick si el enlace va a un hash en la página actual
  const onClick = !isHashLinkOnSamePage
    ? undefined
    : () => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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

const Nav = () => {
  return (
    <ul className="hidden items-center sm:flex">
      {navLinksDATA.map((navLink) => {
        return (
          <li key={navLink.id} className="mr-8 cursor-pointer list-none">
            <NavLink href={navLink.href}>{navLink.link}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
