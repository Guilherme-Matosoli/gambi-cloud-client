
interface BlueLightProps {
  position?: string,
  translate: string
};

export const BlurLight: React.FC<BlueLightProps> = ({ position, translate }) => {
  return (
    <div className={`absolute ${position} w-light h-light rounded-full bg-gradient-to-r from-indigo-400 to-indigo-800 opacity-20 filter blur-light ${translate} max-mobile:hidden`}>

    </div>
  )
};
