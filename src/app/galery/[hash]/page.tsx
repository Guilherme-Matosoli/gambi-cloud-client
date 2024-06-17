import { NextPage } from "next";

interface ListImageParams {
  params: {
    hash: string
  }
};

const ListImage: NextPage<ListImageParams> = ({ params: { hash } }) => {
  return (
    <p>hash: {hash}</p>
  )
};


export default ListImage;
