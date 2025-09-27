import Image from "next/image";
import CtaImage from "../../../public/cta.png";

export default function Cta() {
  return (
    <div className="px-[5%] max-w-[1200px] mx-auto py-16 md:py-24 lg:py-28">
      <div className="ring-1 ring-neutral-400 rounded-lg p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-raleway font-semibold leading-tight">
            Ready to <br />
            <span className="font-playfair-display font-normal italic">
              grow your business?
            </span>
          </h2>
          <p className="mt-4 text-md text-neutral-600">
            Let&apos;s build a stunning website that converts visitors into
            customers and takes your business to the next level.
          </p>
          <div className="mt-8 flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="px-4 py-3 w-full sm:w-auto bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold transition-colors hover:bg-neutral-200">
              Book a call
            </button>
            <button className="px-4 py-3 w-full sm:w-auto bg-black text-white rounded-lg text-md font-semibold transition-colors hover:bg-neutral-800">
              Get a free re-design
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-64 lg:h-auto  flex items-center justify-center">
          <span className="text-neutral-500">
            <Image src={CtaImage} alt="Cta" />
          </span>
        </div>
      </div>
    </div>
  );
}
