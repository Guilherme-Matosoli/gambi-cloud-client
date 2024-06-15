import './globals.css';
import type { Metadata, NextPage } from "next";
import { BlurLight } from '@/components/BlurLight';

export const metadata: Metadata = {
  title: "GambiCloud",
  description: "A cloud to upload and share your images with friends!",
};

interface RootLayoutProps {
  children: Readonly<React.ReactNode>
};

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>

      <body className="relative overflow-x-hidden bg-indigo-950">
        <img
          className="absolute h-full left-0 z-0"
          src="/backgroundImage.svg"
          alt="Partículas"
          draggable={false}
        />

        <BlurLight
          position="left-0 bottom-20"
          translate='-translate-x-1/3'
        />

        <img
          className="absolute h-full right-0 bg z-0"
          src="/backgroundImage.svg"
          alt="Partículas"
          draggable={false}
        />

        <BlurLight
          position="right-0"
          translate="translate-x-1/2"
        />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
