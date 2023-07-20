import Image from "next/image";
import { SectionTitle } from "./ui/SectionTitle";

export const AboutHome = () => {
  return (
    <section className="container py-16 md:py-16 flex items-center justify-center">
      <div>
        <SectionTitle
          subtitle="aboutMe"
          title="Sobre mim"
          className="items-center text-center"
        />
        <div className="w-full lg:max-w-[630px] flex flex-col items-center">
          <Image
            src="/images/marcoswlrich.JPG"
            alt="Foto Perfil - Marcos Wlrich"
            width={80}
            height={80}
            className="mt-6 rounded-full"
          />
          <h3 className="mt-6">Desenvolvedor Back-End</h3>
          <p className="text-center text-sm sm:text-base mt-4">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing
            minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
            amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </p>
        </div>
      </div>
    </section>
  );
};
