import Image from "next/image";
import "../globals.css";

const SectionTitle = ({
  variant,
  title,
}: {
  variant: "circled" | "underlined";
  title: string;
}) => {
  if (variant === "circled") {
    return (
      <div className="relative flex justify-center items-center">
        <Image
          alt="circular outline"
          src="/icons/distorted-circle.svg"
          width={125}
          height={50}
          className="lg:w-36 lg:h-14"
        />
        <p className="gradient-text absolute">{title}</p>
      </div>
    );
  } else if (variant === "underlined") {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="gradient-text lg:text-xl">{title}</p>
        <Image
          alt="underline"
          src="/icons/underline.svg"
          width={55}
          height={7.546}
          className="lg:w-16"
        />
      </div>
    );
  }
};

export default SectionTitle;
