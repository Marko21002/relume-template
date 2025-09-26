import Image from "next/image";
import Promo from "../../../public/Promo.avif";
import Background from "../../../public/download.png";
import Computer from "../../../public/Computer.svg";

export const Hero = () => {
  return (
    <div className="px-[2%] py-12 max-w-[1200px] mx-auto md:py-24 lg:py-28 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
      <div className="flex flex-col items-center lg:items-start justify-center gap-4 lg:w-1/2">
        <h1 className="text-sm ">OVERDELIVER</h1>
        <div className="text-4xl text-center lg:text-left">
          <span className="font-playfair-display italic">
            Web design agency
          </span>
          <br />
          <span className="font-bold font-raleway ">
            {" "}
            for digital businesses
          </span>
        </div>
        <div className="text-md text-center lg:text-left text-neutral-600">
          We build stunning websites for digital businesses and founders. To
          find out more, watch the video below and book a call.
        </div>
        <div className="flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <button className="px-4 py-3 w-full sm:w-auto bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold">
            Book a call
          </button>
          <button className="px-4 py-3 w-full sm:w-auto bg-black text-white rounded-lg text-md font-semibold">
            Get a free re-design
          </button>
        </div>
      </div>
      <div className="relative mt-16 lg:mt-0 w-full lg:w-1/2 max-w-5xl flex items-center justify-center">
        <Image
          src={Computer}
          alt="Promo video"
          className="w-full rounded-xl z-10"
        />
      </div>
    </div>
  );
};
