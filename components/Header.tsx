"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import useMediaQuery from "@/hooks/useMediaQuery";

const navigation = [
  { name: "blog", href: "/blog" },
  { name: "sobre", href: "/sobre" },
  { name: "portfolio", href: "/portfolio" },
  //{ name: 'blog', href: '/blog'},
  //{ name: 'blog', href: '/blog'},
];

type Props = {
  isTopOfPage: boolean;
}

const Header = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isAboveMediamScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-neutral-500 drop-shadow"

  return (
    <header>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <Link href="/">Logo</Link>

            {isAboveMediamScreens ? (
              <div className={`${flexBetween} w-full`}>
                <nav className={`${flexBetween} gap-8 text-sm`}>
                  {navigation.map((item) => (
                    <Link className="text-cyan-500 transition duration-500 hover:text-cyan-300" key={item.name} href={item.href}>
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediamScreens && menuOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-neutral-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <AiOutlineClose className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <nav className="ml-[33%] flex flex-col gap-10 text-2xl">
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
