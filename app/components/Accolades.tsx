import { DataItem, IAccolade } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AccoladesCard = ({ data }: { data: IAccolade }) => {
  const { name, accolade, source_platform_logo, source_uri } = data;
  return (
    <Link
      href={source_uri ?? ""}
      className="flex flex-col w-[11.3125rem] py-1 px-2 flex-shrink-0 border border-Black_8 rounded-lg "
    >
      <div className="flex justify-between items-center mb-2">
        <p className="text-[13.33px] text-offWhite w-full">{name}</p>
        <Image
          alt={`...`}
          src={source_platform_logo ?? ""}
          width={24}
          height={24}
          className={`rounded`}
        />
      </div>
      <p className="text-[11.11px] font-medium text-Black_8 lg:text-[13.33px] max-h-[3.5rem] overflow-hidden text-ellipsis line-clamp-3">
        {accolade}
      </p>
    </Link>
  );
};

const Accolades = ({ items }: { items: DataItem[] }) => {
  const Accolades = items.filter(
    (item): item is IAccolade => "accolade" in item
  );
  return (
    <div className="relative mt-5">
      <div className="flex gap-x-4 items-stretch overflow-scroll px-4 CertificationsAccordion">
        {Accolades.map((accolade) => (
          <AccoladesCard key={accolade._id} data={accolade} />
        ))}
      </div>
      <button
        type="button"
        className={`flex items-center mt-2 absolute right-4 lg:right-0 hover:opacity-50`}
        // onClick={() => {
        //   console.log("adding accolade");
        // }}
      >
        <p className="font-medium text-[11.11px] text-accent">Add Yours</p>
        <Image
          alt={`pen icon`}
          src={"./icons/pen-add.svg"}
          width={16}
          height={16}
          className={`inline-block ms-1`}
        />
      </button>
    </div>
  );
};

export default Accolades;
