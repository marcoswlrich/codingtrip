"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" },
  { name: "Portfolio", href: "/portfolio" },
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
            <Link href="/">
              <Image alt="logo" src={Logo} width={50} height={50} />
            </Link>

            {isAboveMediamScreens ? (
              <div className={`${flexBetween} w-full`}>
                <nav className={`${flexBetween} gap-8 text-base font-normal`}>
                  {navigation.map((item) => (
                    <Link
                      className="transition duration-500 hover:text-gray-300"
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
                <HiMenuAlt3 className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediamScreens && menuOpen && (
        <div className="absolute right-0 top-0 h-screen w-full bg-[#1f2937] bg-opacity-40 z-30 flex flex-col items-end">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-[70%] h-full flex bg-[#FAFAFA] flex-col items-center px-4 py-10 relative"
          >
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <AiOutlineClose className="text-2xl text-gray-400 absolute top-4 right-4" />
            </button>
            <div className="flex flex-col items-center gap-7">
              <motion.nav
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                className="flex flex-col gap-7 text-base"
              >
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
