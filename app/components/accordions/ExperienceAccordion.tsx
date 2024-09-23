"use client";
import { DataItem, IExperience } from "@/types";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { formatDate } from "../../utils/helpers";

const ExperienceItem = ({
  data,
  isOpen,
  setIsOpen,
}: {
  data: IExperience;
  setIsOpen: Dispatch<SetStateAction<string | undefined>>;
  isOpen: string | undefined;
}) => {
  const {
    company,
    location,
    title,
    duration,
    achievements,
    _id,
    company_logo_uri,
  } = data;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen === _id) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, _id]);

  return (
    <div>
      <button
        type="button"
        className={`w-full px-4 py-2 cursor-pointer ${
          isOpen !== _id ? "border border-Black_8 rounded-lg" : ""
        } mt-4`}
        onClick={() => (isOpen === _id ? setIsOpen(undefined) : setIsOpen(_id))}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-offWhite text-[0.83rem] md:text-[1rem]">
            {company}
            <Image
              alt={`${company} logo`}
              src={company_logo_uri ?? ""}
              width={20}
              height={20}
              className="inline-block ml-2"
            />
          </span>
          <span className="text-offWhite text-[0.83rem] md:text-[1rem]">{`${location.state}, ${location.country}`}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-Black_8 font-medium text-[0.69rem] md:text-[0.83rem]">
            {title}
          </span>
          <span className="text-Black_8 font-medium text-[0.69rem] md:text-[0.83rem]">
            {`${formatDate(duration.startDate)} - ${formatDate(
              duration.endDate
            )}`}
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ height: height }}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen !== _id ? "" : "mb-4"
        }`}
      >
        <ul className="ml-6 mt-4 list-disc pl-5 space-y-2">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="text-[0.83rem] lg:text-[1rem] text-Black_8"
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ExperiencesAccordion = ({ items }: { items: DataItem[] }) => {
  const experienceItems = items.filter(
    (item): item is IExperience => "company" in item
  );

  const [isOpen, setIsOpen] = useState<string | undefined>(undefined);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 mt-6 px-4">
      <div className="w-full">
        {experienceItems.map((item, index) => (
          <ExperienceItem
            key={index}
            data={item}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
};
