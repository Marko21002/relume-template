export default function Services() {
  const services = [
    {
      step: 1,
      image: "/discovery.png",
      title: "Discovery call",
      description:
        "We start with a discovery call to understand your business, goals, and target audience.",
    },
    {
      step: 2,
      image: "/style.avif",
      title: "Pick a style",
      description:
        "After getting started, we propose different styles to choose from..",
    },
    {
      step: 3,
      image: "/Website.avif",
      title: "Receive website",
      description:
        "After your approval, we build your website and deliver it to you.",
    },
  ];
  return (
    <div className="px-[5%] max-w-[1400px] mx-auto py-16 md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="text-sm ">Process</div>
        <p className="  text-4xl font-raleway font-semibold leading-none">
          Receive your <br />
          website{" "}
          <span className="font-playfair-display font-normal italic">
            in two weeks
          </span>
        </p>
        <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-8 pt-12 lg:pt-16">
          {services.map((service) => (
            <div
              key={service.step}
              className="relative w-full h-fit border border-neutral-400 rounded-lg px-6 pt-12 pb-6 flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-400 bg-white px-4 py-2">
                <span className="text-sm font-semibold tracking-widest">
                  STEP {service.step}
                </span>
              </div>
              <img
                className=" w-[90%] rounded-md object-cover"
                src={service.image}
                alt={service.title}
              />
              <div className="flex flex-col items-center gap-2">
                <h3 className=" font-raleway font-semibold text-xl">
                  {service.title}
                </h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
