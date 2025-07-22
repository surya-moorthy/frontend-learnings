type Brand = {
  key: string;
  name: string;
};

const brands: Brand[] = [
  { key: "linear", name: "Linear" },
  { key: "perplexity", name: "Perplexity" },
  { key: "flatfile", name: "Flatfile" },
  { key: "copilot", name: "Copilot" },
  { key: "modal", name: "Modal" },
  { key: "atlas", name: "Atlas" },
  { key: "cosmos", name: "COSMOS" },
  { key: "spline", name: "Spline" },
  { key: "graphy", name: "Graphy" },
  { key: "framer", name: "Framer" },
  { key: "clerk", name: "Clerk" },
  { key: "feplicate", name: "Feplicate" },
];

export default function Sliding() {
  return (
    <div className="     overflow-hidden w-full mb-10">
         <div className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
         <div className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
             
      <div className="flex w-max animate-infinite-scroll gap-x-10 px-4">
        {[...brands, ...brands].map((brand, index) => (
          <p
            className="font-bold text-lg tracking-tight text-neutral-900 mx-4 whitespace-nowrap"
            key={`${brand.key}-${index}`}
          >
            {brand.name}
          </p>
        ))}
      </div>
    </div>
  );
}
