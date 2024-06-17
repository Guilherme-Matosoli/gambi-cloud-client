"use client";
import 'react-toastify/dist/ReactToastify.css';
import { FileInput } from "@/components/FileInput";
import { Header } from "@/components/Header";
import { ImagePreview } from "@/components/ImagePreview";
import { Input } from "@/components/Input";
import { LoadingIcon } from "@/components/LoadingIcon";
import { api } from "@/services/api";
import { DragEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AxiosResponse } from 'axios';
import { Footer } from '@/components/Footer';
import { validateImage } from '@/utils/validateImage';

const Upload = () => {
  const [image, setImage] = useState<File | null>();
  const [hash, setHash] = useState<string>("");

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files[0] && validateImage(e.dataTransfer.files[0])) {
      setImage(e.dataTransfer.files[0]);
      return;
    };

    notify("Formato e/ou tamanho do arquivo não aceitos.")
  };

  const randomizeHash = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 50; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    };

    setHash(result);
  };

  const notify = (msg: string) => toast(msg);

  const [promise, setPromise] = useState(false);
  const handleUpload = async (e: FormEvent) => {
    setPromise(true);
    e.preventDefault();
    try {
      if (!image) return;

      const formData = new FormData();
      formData.append('file', image);
      const response = await api.post(`/upload/${hash}`, formData);

      response.data.message == "Upload succesfully" ? notify("Upload concluído com sucesso!") : notify(response.data.message);

    }
    catch (err) {
      if (typeof err == "object" && err != null && 'response' in err) {
        const error = err.response as AxiosResponse;
        const errorMessage = error.data.message;

        errorMessage == "File already exist" && notify("Arquivo já existente, modifique o nome e tente novamente.");
        errorMessage == "File extension not accept" || errorMessage == "Max size exceeded limit (2MB)" && notify("Arquivo não atende aos requisitos");

        errorMessage == "Internal Server error" && notify("Não foi possível completar a solicitação. Por favor, tente mais tarde.");
      }
    }
    finally {
      setPromise(false);
      setImage(null);
    };
  };

  return (
    <main className="flex flex-col items-center justify-between w-full h-screen">
      <Header />

      <ToastContainer
        position="top-center"
        hideProgressBar
        className="toast"
        autoClose={3000}
      />

      <div className="flex flex-1 justify-center items-center w-auto h-auto z-10 max-phone: pb-3">
        <form onSubmit={handleUpload} className="flex flex-col items-center gap-10 max-mobile:px-5">
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
              <ImagePreview imageSrc={URL.createObjectURL(image)} imageName={image.name} onClick={() => setImage(null)} />
              :
              <FileInput onDropFunc={handleDrop} required onChange={e => {
                if (e.target.files && validateImage(e.target.files[0])) {
                  setImage(e.target.files[0])
                  return;
                };

                notify("Tamanho do arquivo excede o limite.")
              }}
              />
          }

          <button className="button relative">
            {
              promise ? <LoadingIcon /> : 'Upload'
            }
          </button>
        </form>
      </div>

      <Footer />
    </main>
  );
};

export default Upload;
