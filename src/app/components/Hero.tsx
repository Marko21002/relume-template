import Image from "next/image";
import Promo from "../../../public/Promo.avif";
import Background from "../../../public/download.png";

export const Hero = () => {
  return (
    <div className="px-[2%] py-12 max-w-[1200px] mx-auto md:py-24 lg:py-28 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-sm ">OVERDELIVER</h1>
        <div className="text-4xl text-center">
          <span className="font-playfair-display italic">
            Web design agency
          </span>
          <br />
          <span className="font-bold font-raleway ">
            {" "}
            for digital businesses
          </span>
        </div>
        <div className="text-md text-center text-neutral-600">
          We build stunning websites for digital businesses and founders. To
          find out more, watch the video below and book a call.
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <button className="px-4 py-3 w-full  bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold">
            Book a call
          </button>
          <button className="px-4 py-3 w-full bg-black text-white rounded-lg text-md font-semibold">
            Get a free re-design
          </button>
        </div>
      </div>
      <div className="relative mt-16 w-full max-w-5xl flex items-center justify-center">
        <Image
          src={Background}
          alt="Background pattern"
          className="absolute z-0 w-full h-full object-cover rounded-xl"
        />
        <Image
          src={Promo}
          alt="Promo video"
          className="w-full rounded-xl z-10"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-white to-white/0" />
      </div>
    </div>
  );
};
