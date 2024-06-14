import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-center border-b border-op z-10">
      <div className="h-full w-3/4 flex items-center justify-between p-3 font-montserrat">
        <a href="/">
          <img
            src="./logo.svg"
            alt="GambiCloud"
            draggable={false}
          />
        </a>

        <nav className="text-white flex gap-3">
          <a target="_blank" href="https://github.com/Guilherme-Matosoli/gambi-cloud" className="cursor-pointer transition-all relative anchor">
            Repository
          </a>

          <a target="_blank" href="https://guilhermematos.vercel.app/" className="cursor-pointer transition-all relative anchor">
            Developer
          </a>
        </nav>

        <Link href="" className="text-white px-8 py-2 rounded-full border border-white cursor-pointer transition-all hover:shadow-light">
          Get started
        </Link>
      </div>
    </header>
  );
};
