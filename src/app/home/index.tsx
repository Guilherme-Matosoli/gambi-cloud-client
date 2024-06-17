import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Header />
      <main className="flex flex-col items-center gap-10 w-3/4 h-full pt-10 z-10 max-mobile:w-full">
        <span className="font-montserrat text-white px-8 py-2 rounded-full border border-white">
          Seja bem vindo à GambiCloud
        </span>

        <h2 className="w-full text-center font-montserrat font-bold text-white text-7xl break-words gradient-text max-mobile:text-5xl max-phone:text-3xl">
          Mais que um simples armazenamento em núvem
        </h2>

        <section className="w-full flex flex-col gap-5 items-center text-gray-300">
          <p className="text-center max-phone:text-xs">
            Armazene e compartilhe suas imagens diariamente com seus amigos
          </p>
          <Link href="/upload" className="button">
            COMEÇAR
          </Link>
        </section>

        <img
          src="/cloud.svg"
          alt="Núvem com uma chave ingles"
          className="w-1/3 image-drop max-mobile:w-1/2"
          draggable={false}
        />
      </main>
      <Footer />
    </div>
  )
};
