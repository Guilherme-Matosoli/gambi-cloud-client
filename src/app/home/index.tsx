import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Header />
      <main className="flex flex-col justify-center items-center gap-8 w-3/4 h-full pt-10 z-10 max-mobile:w-full">
        <span className="font-montserrat text-white px-8 py-2 rounded-full border border-white">
          Seja bem vindo à GambiCloud
        </span>

        <h2 className="w-full text-center leading-snug font-montserrat font-bold text-white text-7xl break-words gradient-text max-mobile:text-5xl max-phone:text-3xl">
          Mais que um simples armazenamento em núvem
        </h2>

        <section className="w-full flex flex-col gap-5 items-center text-gray-300">
          <p className="text-center w-2/3 break-words text-18 max-phone:text-xs max-mobile:w-full">
            Compartilhe e armazene suas imagens diariamente com amigos! Nossa plataforma garante privacidade com imagens limpas automaticamente às 00:00 e compartilhamento via hash.
          </p>

          <div className="flex gap-5 mt-10 max-phone:flex-col max-phone:gap-2 max-phone:w-full max-phone:items-center">
            <Link href="/upload" className="button">
              COMEÇAR
            </Link>

            <a target="_blank" href="https://www.alertpix.live/guimatosoli" className="button-light">
              DONATE
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
};
