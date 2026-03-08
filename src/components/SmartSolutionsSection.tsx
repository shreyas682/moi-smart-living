const solutions = [
  {
    title: "Most Advanced Smart Home Solution",
    description: "MOI Technologies products are wireless, retrofit and modular and fit in to any home architecture seamlessly. MOI smart home solutions work with all the leading smart home ecosystems: Apple HomeKit, Google Home, Amazon Alexa and Samsung SmartThings, simultaneously.",
  },
  {
    title: "Marketing Support",
    description: "We provide qualified leads for you to convert and also help with all the marketing collateral to grow your business.",
  },
  {
    title: "Leading Smart Home Brand",
    description: "MOI Technologies is a pioneer in the Indian smart home industry, and has grown into a trusted brand. We innovate continuously to provide ever improving solutions to our customers.",
  },
  {
    title: "Dedicated Support",
    description: "We have dedicated teams to provide all the support needed to distribute MOI Technologies products. We provide continuous technical and sales training and take care of customer support.",
  },
];

const SmartSolutionsSection = () => {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {solutions.map((s) => (
            <div key={s.title}>
              <h3 className="text-xl font-bold text-foreground mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSolutionsSection;
