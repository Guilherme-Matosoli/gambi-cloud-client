
export const ImageCard = () => {
  return (
    <div className="w-40 h-44 flex flex-col items-center justify-between p-2 bg-violet-900 rounded-xl">
      <img
        src="/teste.jpg"
        className="rounded-xl bg-white"
      />

      <span className="font-montserrat text-white text-xs">
        teste.png
      </span>

      <button className="rounded-full p-2 bg-violet-500 transition-smooth hover:brightness-110">
        <img
          src="/downloadIcon.svg"
        />
      </button>
    </div>
  );
};
