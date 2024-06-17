import { LoadingIcon } from "../LoadingIcon";

interface ImagePreviewProps {
  imageSrc?: string,
  imageName?: string,
  onClick?: () => void
};

export const ImagePreview: React.FC<ImagePreviewProps> = ({ imageSrc, imageName, onClick }) => {
  return (
    <section className="flex items-center relative justify-center w-80 h-52 p-2 border border-white rounded-lg image-drop">
      <button onClick={onClick} className="z-20 absolute top-0 right-0 rounded-full p-1 bg-fuchsia-600 transition-smooth hover:scale-110">
        <img
          src="/trashIcon.svg"
        />
      </button>

      <img
        src={imageSrc}
        alt={imageName}
        className="z-10 max-h-48"
      />

      <LoadingIcon />
    </section>
  )
};
