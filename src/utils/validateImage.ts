export const validateImage = (image: File): boolean => {
  const maxSize = 2 * 1024 * 1024;

  const acceptedMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/webp",
    "image/tiff",
    "image/svg+xml"
  ];

  if (!acceptedMimeTypes.includes(image.type)) return false;

  if (image.size > maxSize) return false;

  return true;
};
