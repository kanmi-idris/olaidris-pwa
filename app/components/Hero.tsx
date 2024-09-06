"use client";
import Image from "next/image";
import { useState } from "react";
import "../globals.css";
import ContactInput from "./Input";
import NavigationBar from "./NavigationBar";

const Hero = () => {
  const [isImageLoading, setImageLoading] = useState(true);
  return (
    <div className="pt-[4.6875rem]">
      <h1 className="text-3xl text-offWhite font-semibold text-center text-nowrap">
        Olasunkanmi IDRIS
      </h1>
      <h3 className="text-lg text-Gray font-semibold text-center text-nowrap mb-10">
        Software Engineer
      </h3>
      <div className="px-5">
        <Image
          alt="Olasunkanmi Idris smiling and making a peace sign at his desk, with code displayed on the computer screens in an office setting."
          src="/images/olaidris_img.webp"
          height={195}
          width={353}
          onLoad={() => setImageLoading(false)}
          className={`${
            isImageLoading ? "blur" : "remove-blur"
          } rounded-[30px] w-full`}
          priority
        />
      </div>
      <div className="fixed bottom-0 left-0 z-50 w-full bg-base">
        <ContactInput />
        <NavigationBar />
      </div>
    </div>
  );
};

export default Hero;
