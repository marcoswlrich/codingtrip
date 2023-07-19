import Image from "next/image";
import { Button } from "./ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-blue-50 bg-opacity-80 flex flex-col justify-end pb-10 sm:pb32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className=" mt-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-sm sm:text-base">
            Seja bem-vindo ao
          </p>
          <h1 className="mt-2">Coding Trip</h1>
          <p className="my-6 text-sm sm:text-base">
            O Coding Trip é um blog e portfólio desenvolvido por{" "}
            <span className="text-purple-600/75">Marcos Wlrich</span>, nele
            divulgo todos os meus projetos, mostro todo meu processo de
            transição de carreira, meu progresso de estudos de desenvolvimeto
            back-end e graduação em Engenharia de Software. No blog dou dicas de
            várias tecnologias na área, principalmente as linguagens que domino,
            as ferramentas de desenvolvimento em Linux, Nvim e muito mais...
          </p>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <a href="/blog">
              <Button intent="primary">Contato</Button>
            </a>

            <a className="flex items-center h-20 gap-3" href="/blog">
              <Button intent="primary">Contato</Button>
            </a>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/hero-image-2.svg"
          alt="Image Hero"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
