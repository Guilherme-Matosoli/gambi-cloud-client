import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import Link from "next/link";


const Galery = () => {
  return (
    <main className="flex w-full h-screen flex-col items-center justify-between">
      <Header />
      <section className="w-auto h-full flex items-center justify-center">
        <form className="flex flex-col items-center gap-10 max-mobile:px-5">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-montserrat gradient-text text-5xl font-bold text-center leading-snug">
              Digite sua hash:
            </h2>

            <span className="font-montserrat text-gray-400 text-center">
              Caso não tenha uma hash, volte na <Link href="/upload" className="underline transition-smooth hover:brightness-110">página de upload</Link> e gere a sua
            </span>
          </div>

          <Input
            placeholder="Digite sua hash"
            required
            hiddenButton
          />

          <button className="button relative">
            Listar imagens
          </button>
        </form>
      </section>
      <Footer />
    </main >
  )
};


export default Galery;
