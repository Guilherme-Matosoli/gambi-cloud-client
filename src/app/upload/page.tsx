"use client";
import { FileInput } from "@/components/FileInput";
import { Input } from "@/components/Input";
import { DragEvent, useState } from "react";

const Upload = () => {
  const [image, setImage] = useState<FileList>();
  const [hash, setHash] = useState<string>("");

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setImage(e.dataTransfer.files);


    console.log(image)
  };

  const randomizeHash = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    for (let i = 0; i < 20; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    };

    setHash(result);
  };

  return (
    <main className="flex items-center justify-center w-full h-screen z-10">
      <div className="flex justify-center-center w-auto h-auto">
        <form className="flex flex-col items-center">
          <h2 className="font-montserrat gradient-text text-5xl font-bold">
            Digite sua hash:
          </h2>

          <Input
            placeholder="Digite sua hash"
            onClickButton={randomizeHash}
            value={hash}
            onChange={e => setHash(e.target.value)}
            required
          />

          <FileInput onDropFunc={handleDrop} />
        </form>
      </div>
    </main>
  );
};

export default Upload;
