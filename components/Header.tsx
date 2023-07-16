"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const navigation = [
  { name: "blog", href: "/blog" },
  { name: "sobre", href: "/sobre" },
  { name: "portfolio", href: "/portfolio" },
  //{ name: 'blog', href: '/blog'},
  //{ name: 'blog', href: '/blog'},
];

type Props = {
  isTopOfPage: boolean;
};

const Header = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isAboveMediamScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-[#FAFAFA] shadow-md";

  return (
    <header>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 h-20 w-full py-5`}
      >
        <div className={`${flexBetween} mx-auto w-11/12`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <Image alt="logo" src={Logo} width={50} height={50} />

            {isAboveMediamScreens ? (
              <div className={`${flexBetween} w-full`}>
                <nav className={`${flexBetween} gap-8 text-base font-normal`}>
                  {navigation.map((item) => (
                    <Link
                      className="transition duration-500 hover:text-cyan-300"
                      key={item.name}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ) : (
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediamScreens && menuOpen && (
        <div className="fixed left-0 bottom-0 z-40 h-screen w-[50%] bg-blue-50 drop-shadow-xl">
          <div className="flex justify-end p-6 top-0">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <AiOutlineClose className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <nav className="ml-[42%] flex flex-col gap-7 text-base">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
