"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../globals.css";
import BrandsLine from "./BrandsLine";
import ContactInput from "./Input";
import NavigationBar from "./NavigationBar";

const MobileHero = () => {
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

const DesktopHero = () => {
  const [isImageLoading, setImageLoading] = useState(true);
  const [isLoadingIntro, setIsLoadingIntro] = useState(true);

  useEffect(() => {
    console.log("Component mounted, setting isLoadingIntro to false");
    setIsLoadingIntro(false);
  }, []);

  return (
    <section
      className={`${
        isLoadingIntro ? "blur-sm" : "blur-none"
      } transition-all duration-300 ease-in-out`}
    >
      <div
        className={`mt-36 flex gap-12 justify-center items-center max-w-6xl mx-auto`}
      >
        <Image
          alt="Olasunkanmi Idris smiling and making a peace sign at his desk, with code displayed on the computer screens in an office setting."
          src="/images/desktop-olaidris_img.webp"
          height={545}
          width={350}
          onLoad={() => setImageLoading(false)}
          className={`${
            isImageLoading ? "blur" : "remove-blur"
          } rounded-[30px] h-full`}
          priority
        />
        <div className={`gap-8 flex flex-col justify-start items-start `}>
          <div>
            <h1 className="text-3xl text-offWhite font-semibold text-start text-nowrap">
              Olasunkanmi IDRIS
            </h1>
            <h3 className="text-lg text-Gray font-semibold text-start text-nowrap">
              Software Engineer
            </h3>
          </div>
          <p className="w-auto h-full text-Black_9">
            Hey there!{" "}
            <picture className="inline-block align-text-bottom">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                alt="👋"
                width="16"
                height="16"
              />
            </picture>{" "}
            I am him! Your team&apos;s missing rib{" "}
            <picture className="inline-block align-text-bottom">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.gif"
                alt="😂"
                width="16"
                height="16"
              />
            </picture>{" "}
            In my previous role, I helped conjure up a fintech app that now
            boasts <span className="text-accent">5000+ users</span> and a{" "}
            <span className="text-accent">stellar 4.3 Appstore rating</span>. ✨
            <br />
            <br />
            Fast-forward to my current role: I&apos;m the proud guardian of five
            AWS instances (yes, I count them like a proud plant parent 🌿). My
            secret sauce? Performance optimization magic! I waved my wand (okay,
            it was more like a keyboard) and{" "}
            <span className="text-accent">
              slashed server downtime by a whopping 25%
            </span>
            . 🧙‍♂️
          </p>
          <ContactInput />
        </div>
        <NavigationBar />
      </div>
      <BrandsLine />
    </section>
  );
};

const ResponsiveHero = () => (
  <>
    <div className="lg:hidden">
      <MobileHero />
    </div>
    <div className="hidden lg:block">
      <DesktopHero />
    </div>
  </>
);

export default ResponsiveHero;
