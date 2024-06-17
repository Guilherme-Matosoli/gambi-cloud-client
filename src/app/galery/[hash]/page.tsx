"use client";
import './styles.css';

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageCard } from "@/components/ImageCard";
import { LoadingIcon } from "@/components/LoadingIcon";
import { api } from "@/services/api";
import { NextPage } from "next";
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
  }, [hash]);

  return (
    <main className="w-full h-screen flex flex-col items-center">
      <Header />

      <section className="relative flex flex-col gap-5 w-2/3 h-full max-mobile:w-full">
        {pending && <LoadingIcon />}

        <h2 className="font-montserrat flex flex-col items-center gradient-text text-5xl font-bold text-center leading-snug">
          Visualizando nuvem da hash:
          <span className="text-xl">{hash}</span>
        </h2>

        <div className="image-list w-full flex flex-wrap justify-center items-center overflow-y-auto gap-2 py-2">
          {
            listImage.map(image => {
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
