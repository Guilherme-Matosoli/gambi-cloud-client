"use client";
import { validateImage } from "@/utils/validateImage";
import { ChangeEvent, DragEvent, InputHTMLAttributes, useState } from "react";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onDropFunc: (e: DragEvent<HTMLLabelElement>) => void,
  onChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void,
};

export const FileInput: React.FC<FileInputProps> = ({ onDropFunc, onChangeFunc, ...rest }) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <label onDragOver={e => e.preventDefault()} onDrop={e => onDropFunc(e)} htmlFor="image" className="relative cursor-pointer flex flex-col gap-5 items-center justify-center w-80 h-52 bg-indigo-800 rounded-xl gradient-background transition-smooth hover-input max-phone:h-28 max-phone:w-56 max-phone:p-5 max-phone:gap-1">
      <span className="font-montserrat text-red-500 absolute top-0 -translate-y-full">{error}</span>

      <input
        id="image"
        type="file"
        hidden
        accept="image/*"{...rest}
        onChange={e => {
          const validate = e.target.files && validateImage(e.target.files[0]);
          if (validate == "format") {
            setError("Formato de arquivo não aceito")
            return;
          };

          if (validate == "size") {
            setError("Tamanho do arquivo não aceito (max 2Mb)")
            return;
          };

          onChangeFunc(e);
        }}
      />

      <div className="flex flex-col items-center">
        <span className="text-white font-montserrat font-medium text-center max-phone:text-xs">
          Selecione sua imagem
        </span>

        <p className="text-red-200 font-montserrat text-xs max-phone:text-mini">
          ( Tamanho máximo de 2Mb )
        </p>
      </div>

      <img
        src="/uploadIcon.svg"
        alt="Cloud that indicates upload"
        className="max-phone: w-10"
      />
    </label>
  )
};
