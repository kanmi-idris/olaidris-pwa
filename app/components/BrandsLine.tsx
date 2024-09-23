import Image from "next/image";
import Link from "next/link";

interface Brand {
  name: string;
  width: number;
  height: number;
  url: string;
}

const BrandsLine = () => {
  const brands: Brand[] = [
    { name: "mmuta", width: 97, height: 29, url: "https://mmuta.com" },
    {
      name: "coursemate",
      width: 150.37,
      height: 29,
      url: "https://app.coursemateapp.co/",
    },
    {
      name: "totalEnergies",
      width: 62,
      height: 47,
      url: "https://totalenergies.com",
    },
    {
      name: "dacurate",
      width: 130,
      height: 29,
      url: "https://dacurate-app.vercel.app/",
    },
    {
      name: "raoatech",
      width: 130,
      height: 39,
      url: "https://www.raoatech.com/",
    },
    {
      name: "finkia",
      width: 102.61,
      height: 33.41,
      url: "https://www.finkia.com.ng/signin",
    },
  ];

  return (
    <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto mt-20 px-5">
      {brands.map((brand: Brand) => (
        <Link
          key={brand.name}
          href={brand.url}
          className="transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt={`${brand.name} logo`}
            src={`/images/${brand.name}_logo.webp`}
            height={brand.height}
            width={brand.width}
            priority
          />
        </Link>
      ))}
    </div>
  );
};

export default BrandsLine;
