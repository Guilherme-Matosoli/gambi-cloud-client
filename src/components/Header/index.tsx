import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-center border-b border-op z-10">
      <div className="h-full w-3/4 flex items-center justify-between p-3 font-montserrat max-mobile:w-full">
        <a href="/">
          <img
            src="/logo.svg"
            alt="GambiCloud"
            draggable={false}
            className="max-mobile:w-fit max-phone:w-36"
          />
        </a>

        <nav className="text-white flex gap-10 max-phone:gap-2">
          <Link href="/upload" className="cursor-pointer transition-all relative font-medium anchor max-mobile:text-xl">
            Upload
          </Link>

          <Link href="/galery" className="cursor-pointer transition-all relative font-medium anchor max-mobile:text-xl">
            Galeria
          </Link>
        </nav>

        <Link href="/upload" className="text-white px-8 py-2 rounded-full border border-white cursor-pointer transition-all hover:shadow-light max-mobile:hidden">
          Get started
        </Link>
      </div>
    </header>
  );
};
