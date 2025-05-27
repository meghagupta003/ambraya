export function BrandFeatures() {
  const features = [
    {
      title: "Premium Quality",
      description: "Carefully selected materials and expert craftsmanship in every piece.",
    },
    {
      title: "Sustainable Fashion",
      description: "Ethically sourced materials with a commitment to environmental responsibility.",
    },
    {
      title: "Timeless Design",
      description: "Contemporary pieces designed to transcend seasonal trends.",
    },
  ]

  return (
    <section className="py-20 bg-brand-neutral-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-brand-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium mb-4 text-brand-black tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
