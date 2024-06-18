import { InputHTMLAttributes, useRef } from "react";
import { toast } from "react-toastify";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickButton?: () => void,
  hiddenButton?: boolean
};

export const Input: React.FC<InputProps> = ({ onClickButton, hiddenButton, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClip = () => {
    if (inputRef?.current?.value) {
      navigator.clipboard.writeText(inputRef.current.value);
      toast("Copiado para área de transferência")
    };
  };

  return (
    <section className="w-full flex justify-center gradient-background border border-indigo-200 rounded-md input-focus transition-smooth">
      <input {...rest} ref={inputRef} className="w-full px-2 outline-none py-2 px-2 bg-transparent text-white placeholder-gray-400 font-montserrat" />

      <button type="button" className="group px-2" onClick={onClickButton} hidden={hiddenButton}>
        <img
          src="/refreshIcon.svg"
          alt="Refresh"
          className="transition-smooth group-hover:scale-110"
        />
      </button>

      <button type="button" className="group px-2" onClick={copyToClip}>
        <img
          src="/copyIcon.svg"
          alt="Copy"
          className="transition-smooth group-hover:scale-110"
        />
      </button>
    </section>
  );
};
