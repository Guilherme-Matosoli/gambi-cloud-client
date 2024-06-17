"use client";
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

  const getImages = async () => {
    try {
      const response = await api.get(`/images/${hash}`);
      setListImage(response.data);
    }
    catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    getImages();
  }, [hash]);

  return (
    <p>
      hash: {hash}

      <img
        src={`http://localhost:4000/render/${hash}/${listImage[0]?.filename}`}
      />
    </p>
  )
};


export default ListImage;
