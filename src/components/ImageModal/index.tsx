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
    <section onClick={e => handleCloseFunc(e)} className="flex items-center py-3 justify-center fixed right-0 top-0 w-screen h-screen bg-black/[.9] z-30 max-mobile:px-3">
      <div className="w-2/3 bg-white rounded-xl overflow-hidden max-h-full border-2 border-white max-mobile:w-full">
        <img
          src={imageSrc}
          className="z-50 max-mobile:max-h-full w-full object-cover"
        />
      </div>
    </section>
  );
};
