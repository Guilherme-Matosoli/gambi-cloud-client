export const validateImage = (image: File) => {
  const maxSize = 2 * 1024 * 1024;

  const acceptedMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/webp",
    "image/tiff",
  ];

  if (!acceptedMimeTypes.includes(image?.type)) return "format";

  if (image.size > maxSize) return "size";

  return true;
};
