import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavigationBar = () => {
  const [clickedChannel, setClickedChannel] = useState<string | null>(null);

  const channels = [
    { name: "email", link: "mailto:olaidris15@gmail.com" },
    { name: "linkedin", link: "https://linkedin.com/in/olaidris" },
    {
      name: "resume",
      link: "https://docs.google.com/document/d/1A6OaeDZwBJaeIG0iBJqJu_ec8XWG5HY3FnLzir99ebI/edit?usp=sharing",
    },
    { name: "phone", link: "tel:+2348105410146" },
    { name: "github", link: "https://github.com/kanmi-idris" },
  ];

  const handleClick = (channelName: string) => {
    setClickedChannel(channelName);
    setTimeout(() => setClickedChannel(null), 300); // Reset after 300ms
  };

  return (
    <nav className="flex flex-row lg:flex-col gap-3 lg:gap-6 items-center mb-5 px-5 bg-base lg:justify-start justify-between">
      {channels.map((channel) => {
        const textColor =
          channel.name === "resume" ? "gradient-text" : "text-Gray";
        const clickOpacity =
          clickedChannel === channel.name ? "opacity-50" : "";

        return (
          <Link
            key={channel.name}
            href={channel.link}
            className={`flex flex-col items-center transition-opacity duration-300 hover:opacity-70 ${clickOpacity}`}
            aria-label={channel.name}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(channel.name)}
          >
            <Image
              alt={`${channel.name} icon`}
              src={`/icons/${channel.name}.svg`}
              height={20}
              width={20}
              className="mb-1"
            />
            <span className={`font-medium text-[11px] capitalize ${textColor}`}>
              {channel.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
