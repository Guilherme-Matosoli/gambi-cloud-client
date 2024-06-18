interface ImageModalProps {
  imageSrc: string,
  visible: boolean,
  handleClose: () => void
};


export const ImageModal: React.FC<ImageModalProps> = ({ imageSrc, visible, handleClose }) => {
  const handleCloseFunc = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLImageElement) return;

    handleClose();
  };

  return visible && (
    <section onClick={e => handleCloseFunc(e)} className="flex items-center justify-center fixed top-0 w-screen h-screen bg-black/[.9] z-30 max-mobile:px-3">
      <div className="w-2/3 bg-white rounded-xl overflow-hidden border-2 border-white max-mobile:w-full">
        <img
          src={imageSrc}
          className="z-50"
        />
      </div>
    </section>
  );
};
