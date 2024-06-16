"use client";
import { FileInput } from "@/components/FileInput";
import { Input } from "@/components/Input";
import { DragEvent, useState } from "react";

const Upload = () => {
  const [image, setImage] = useState<FileList>();

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setImage(e.dataTransfer.files);


    console.log(image)
  };

  return (
    <main className="flex items-center justify-center w-full h-screen z-10">
      <div className="flex flex-col items-center w-auto h-auto">
        <h2 className="font-montserrat gradient-text text-5xl font-bold">
          Digite sua hash:
        </h2>

        <Input />

        <FileInput onDropFunc={handleDrop} />
      </div>
    </main>
  );
};

export default Upload;
