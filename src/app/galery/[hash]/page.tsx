"use client";
import './styles.css';

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageCard } from "@/components/ImageCard";
import { LoadingIcon } from "@/components/LoadingIcon";
import { api } from "@/services/api";
import { NextPage } from "next";
import Link from 'next/link';
import { useEffect, useState } from "react";

interface ListImageParams {
  params: {
    hash: string
  }
};

interface Image {
  filename: string
};

const ListImage: NextPage<ListImageParams> = ({ params: { hash } }) => {
  const [listImage, setListImage] = useState<Image[]>([]);
  const [pending, setPending] = useState(true);

  const getImages = async () => {
    try {
      const response = await api.get(`/images/${hash}`);
      setListImage(response.data);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setPending(false);
    };
  };

  useEffect(() => {
    getImages();
  });

  return (
    <main className="w-full min-h-screen h-screen flex flex-col items-center scrollbar">
      <Header />

      <section className="relative flex flex-col px-2 gap-5 w-2/3 h-full overflow-y-auto max-mobile:w-full">
        {pending && <LoadingIcon />}

        <h2 className="font-montserrat flex flex-col items-center gradient-text text-5xl font-bold text-center leading-tight">
          Visualizando nuvem da hash:
          <span className="text-xl w-full text-center break-words">{hash}</span>
        </h2>

        <div className="w-full h-full flex flex-wrap justify-center items-center gap-2 py-2 max-phone:px-3">
          {
            !pending && listImage.length < 1 && (
              <span className="font-montserrat text-white text-center">
                Esta hash não possui imagens, vá à <Link href="/upload" className="underline transition-smooth hover:brightness-90">página de upload</Link> e faça seu upload
              </span>
            )
          }

          {
            listImage && listImage.map(image => {
              return <ImageCard key={image.filename} hash={hash} filename={image.filename} />
            })
          }
        </div>
      </section>

      <Footer />
    </main>
  )
};


export default ListImage;
