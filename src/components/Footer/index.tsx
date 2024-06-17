
export const Footer = () => {
  return (
    <footer className="w-3/4 flex items-center justify-center z-10 max-mobile:mt-5">
      <span className="text-white font-montserrat text-l max-mobile:text-xs">
        &copy; {new Date().getFullYear()} Todos direitos reservados
      </span>
    </footer>

  );
};
