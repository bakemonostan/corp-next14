import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  title: string;
  imgAlt: string;
  imageData: StaticImageData;
}

export default function Hero({ title, imgAlt, imageData }: HeroProps) {
  return (
    <div className="relative h-screen ">
      <div className="absolute -z-10 inset-0">
        <Image
          src={imageData}
          alt={imgAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 " />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-sm text-white md:text-6xl">{title}</h1>
      </div>
    </div>
  );
}
