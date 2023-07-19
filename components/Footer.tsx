"use client";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { footerLinks, socialMedia } from "@/constants";

const Footer = () => {
  return (
    <section className="w-full bg-blue-50 bg-opacity-80">
      <div className="container flex justify-center items-center sm:py-16 py-6">
        <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
          <div className="flex-[1] flex flex-col justify-start mr-10">
            <Image
              src={Logo}
              alt="Logo"
              className="w-[74px] h-[74px] object-contain"
            />
            <p className="font-normal leading-[30.8px] mt-4 max-w-[312px]">
              Coding Trip
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div
                key={footerlink.title}
                className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
              >
                <h4 className="font-bold text-[18px] leading-[27px]">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-normal leading-[24px] hover:text-gray-300 cursor-pointer ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container h-14 flex justify-between items-center md:flex-row flex-col">
        <p className="font-medium text-center text-xs sm:text-sm font-mono">
          Desenvolvido por Marcos Wlrich
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
