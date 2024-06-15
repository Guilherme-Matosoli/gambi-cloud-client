import { FileInput } from "@/components/FileInput";

const Upload = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen z-10">
      <div className="flex flex-col items-center w-2/3 h-auto">
        <h2 className="font-montserrat gradient-text text-5xl font-bold">
          Digite sua hash:
        </h2>

        <FileInput />
      </div>
    </main>
  );
};

export default Upload;
