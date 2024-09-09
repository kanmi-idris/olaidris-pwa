import Image from "next/image";

interface Brand {
  name: string;
  width: number;
  height: number;
}

const BrandsLine = () => {
  const brands: Brand[] = [
    { name: "mmuta", width: 97, height: 29 },
    { name: "coursemate", width: 150.37, height: 29 },
    { name: "totalEnergies", width: 62, height: 47 },
    { name: "dacurate", width: 130, height: 29 },
    { name: "raoatech", width: 130, height: 39 },
    { name: "finkia", width: 102.61, height: 33.41 },
  ];

  return (
    <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto mt-20">
      {brands.map((brand: Brand) => (
        <Image
          key={brand.name}
          alt={`${brand.name} logo`}
          src={`/images/${brand.name}_logo.webp`}
          height={brand.height}
          width={brand.width}
          priority
        />
      ))}
    </div>
  );
};

export default BrandsLine;
