interface ImageProps {
  filename?: string,
  hash?: string
};

export const ImageCard: React.FC<ImageProps> = ({ filename, hash }) => {
  const imageLink = `${process.env.NEXT_PUBLIC_API_URL}/render/${hash}/${filename}`

  return (
    <div className="w-60 min-h-52 flex flex-col items-center justify-between p-2 bg-violet-900 rounded-xl border border-white max-phone:w-full">
      <img
        src={imageLink}
        alt={filename}
        className="rounded-xl bg-white border border-white"
      />

      <span className="font-montserrat text-white text-xs">
        {filename}
      </span>

      <a href={imageLink} download={filename} className="w-full flex items-center justify-center rounded-xl p-2 bg-violet-500 transition-smooth hover:brightness-110 border border-white">
        <img
          src="/downloadIcon.svg"
        />
      </a>
    </div>
  );
};
