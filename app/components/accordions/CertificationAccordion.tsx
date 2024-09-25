"use client";
import { DataItem, ICertificate } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import "../../globals.css";
import { formatDate } from "../../utils/helpers";

const CertificationItem = ({
  data,
  isOpen,
  setIsOpen,
}: {
  data: ICertificate;
  setIsOpen: Dispatch<SetStateAction<string | undefined>>;
  isOpen: string | undefined;
}) => {
  const { _id, sponsor, title, awarding_date, logo_uri, proof_uri } = data;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (isOpen === _id) {
        setHeight(contentRef.current?.scrollHeight);
      } else {
        setHeight(0);
      }
    } else {
      setHeight(contentRef.current?.scrollHeight);
    }
  }, [isOpen, _id, isMobile]);

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(isOpen === _id ? undefined : _id);
    }
  };

  return (
    <div className="mb-2">
      <button
        type="button"
        className={`w-full py-2 cursor-pointer ${
          isOpen === _id ? "mb-4" : ""
        } lg:w-[22rem] `}
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-offWhite text-[0.83rem] md:text-[1rem] text-start">
            {sponsor}
          </span>
          <Image
            alt={`${sponsor} logo`}
            src={logo_uri ?? ""}
            width={20}
            height={20}
            className="inline-block ml-2 rounded"
          />
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-Black_8 font-medium text-[0.69rem] md:text-[0.83rem] text-start">
            {title}
          </span>
          <span className="text-Black_8 font-medium text-[0.69rem] md:text-[0.83rem] text-end">
            {`${formatDate(awarding_date)}`}
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ height: height }}
        className={`${
          isMobile
            ? "overflow-hidden transition-all duration-300 ease-in-out"
            : ""
        } w-full lg:w-[22rem] ${isOpen !== _id ? "" : "mb-4"}`}
      >
        <Image
          alt={`${sponsor} ${title} certificate`}
          src={proof_uri ?? ""}
          width={350}
          height={350}
          className={`rounded-lg w-full ${!isMobile && "mt-2"}`}
        />
      </div>
    </div>
  );
};

export const CertificationsAccordion = ({ items }: { items: DataItem[] }) => {
  const CertificationItems = items.filter(
    (item): item is ICertificate => "awarding_date" in item
  );

  const [isOpen, setIsOpen] = useState<string | undefined>(undefined);

  return (
    <div className="lg:flex lg:gap-x-8 mt-6 px-4 lg:px-0 overflow-x-scroll items-stretch pb-8 CertificationsAccordion">
      {CertificationItems.map((item, index) => (
        <CertificationItem
          key={index}
          data={item}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
};
