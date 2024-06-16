"use client";
import { DragEvent, InputHTMLAttributes } from "react";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onDropFunc: (e: DragEvent<HTMLLabelElement>) => void;
};

export const FileInput: React.FC<FileInputProps> = ({ onDropFunc, ...rest }) => {

  return (
    <label onDragOver={e => e.preventDefault()} onDrop={e => onDropFunc(e)} htmlFor="image" className="cursor-pointer flex flex-col gap-5 items-center justify-center w-80 h-52 bg-indigo-800 rounded-xl gradient-background transition-smooth hover-input max-phone:h-28 max-phone:w-56 max-phone:p-5 max-phone:gap-1">
      <input id="image" type="file" hidden accept="image/*"{...rest} />

      <span className="text-white font-montserrat font-medium text-center">
        Selecione sua imagem
      </span>

      <img
        src="/uploadIcon.svg"
        alt="Cloud that indicates upload"
        className="max-phone: w-10"
      />
    </label>
  )
};
