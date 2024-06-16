import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickButton: () => void
};

export const Input: React.FC<InputProps> = ({ onClickButton, ...rest }) => {
  return (
    <section className="w-full flex justify-center gradient-background border border-indigo-200 rounded-md input-focus transition-smooth">
      <input {...rest} className="w-full px-2 outline-none py-2 px-2 bg-transparent text-white placeholder-white font-montserrat" />
      <button className="group px-2" onClick={onClickButton}>
        <img
          src="/refreshIcon.svg"
          alt="Refresh"
          className="transition-smooth group-hover:scale-110"
        />
      </button>
    </section>
  );
};
