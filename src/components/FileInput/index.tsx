import { InputHTMLAttributes } from "react";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {

};

export const FileInput: React.FC<FileInputProps> = ({ ...rest }) => {

  return (
    <label htmlFor="image" className="cursor-pointer flex items-center justify-center w-80 h-52 bg-indigo-800 rounded-xl gradient-background">
      <input id="image" type="file" hidden {...rest} />
      <span className="text-white font-montserrat font-medium">
        Selecione sua imagem
      </span>
    </label>
  )
};
