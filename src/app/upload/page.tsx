"use client";
import { FileInput } from "@/components/FileInput";
import { ImagePreview } from "@/components/ImagePreview";
import { Input } from "@/components/Input";
import { DragEvent, useState } from "react";

const Upload = () => {
  const [image, setImage] = useState<FileList | null>();
  const [hash, setHash] = useState<string>("");

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setImage(e.dataTransfer.files);


    console.log(image)
  };

  const randomizeHash = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    for (let i = 0; i < 50; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    };

    setHash(result);
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      <div className="flex justify-center-center w-auto h-auto z-10">
        <form className="flex flex-col items-center gap-10 max-mobile:px-5">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-montserrat gradient-text text-5xl font-bold text-center leading-snug">
              Digite sua hash:
            </h2>

            <span className="font-montserrat text-gray-400 text-center">
              Você pode inserir manualmente ou gerar uma clicando no botão ao lado
            </span>
          </div>

          <Input
            placeholder="Digite sua hash"
            onClickButton={randomizeHash}
            value={hash}
            onChange={e => setHash(e.target.value)}
            required
          />

          {
            image
              ?
              <ImagePreview imageSrc={URL.createObjectURL(image[0])} imageName={image[0].name} onClick={() => setImage(null)} />
              :
              <FileInput onDropFunc={handleDrop} onChange={e => setImage(e.target.files)} />
          }

          <button className="font-montserrat font-semibold text-white py-2 px-6 border border-white rounded-full transition-smooth hover-input">
            Upload
          </button>
        </form>
      </div>
    </main>
  );
};

export default Upload;
