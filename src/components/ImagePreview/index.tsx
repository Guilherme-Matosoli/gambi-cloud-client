
interface ImagePreviewProps {
  imageSrc?: string,
  imageName?: string,
  onClick?: () => void
};

export const ImagePreview: React.FC<ImagePreviewProps> = ({ imageSrc, imageName, onClick }) => {
  return (
    <section className="flex items-center relative justify-center w-80 h-52 p-2 border border-white rounded-lg">
      <button onClick={onClick} className="absolute top-0 right-0 rounded-full p-1 bg-red-500 transition-smooth hover:scale-110">
        <img
          src="/trashIcon.svg"
        />
      </button>

      <img
        src={imageSrc}
        alt={imageName}
      />
    </section>
  )
};
