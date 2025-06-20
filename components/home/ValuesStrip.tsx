import Image from "next/image";

const values = [
  {
    title: "Sustainable Fabrics",
    description: "Made with breathable, earth-friendly cotton for everyday comfort.",
    image: "/images/values/fabric.jpg", // use AI image here
  },
  {
    title: "Effortless Styling",
    description: "Minimal design, maximum ease—ideal for every day of the week.",
    image: "/images/values/style.jpg", // use AI image here
  },
  {
    title: "Conscious Living",
    description: "Clothing that cares—for you and the planet.",
    image: "/images/values/conscious.jpg", // use AI image here
  },
];

export default function ValuesStrip() {
  return (
    <section className="bg-[#f6f6f4] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight">
          Our Commitments
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((value, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={value.image}
                  alt={value.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-medium">{value.title}</h3>
              <p className="text-gray-600 mt-2 text-sm max-w-xs">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
