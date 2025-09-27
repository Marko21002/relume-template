export default function Navbar() {
  return (
    <div className="px-[5%] max-w-[1400px] mx-auto py-4 flex items-center justify-between">
      <img src="/overdeliver.png" alt="overdeliver" className="w-40 " />
      <div className="hidden md:block ">
        <div className="flex gap-4">
          <button className="px-4 cursor-pointer py-3 w-full sm:w-auto bg-white text-black ring ring-neutral-400 rounded-lg text-md font-semibold transition-colors hover:bg-neutral-100">
            Book a call
          </button>
          <button className="px-4 cursor-pointer py-3 w-full sm:w-auto bg-black text-white rounded-lg text-md font-semibold transition-colors hover:bg-neutral-800">
            Get a free re-design
          </button>
        </div>
      </div>
      <div className="px-2 py-2 rounded-full border border-black cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
          className="cursor-pointer"
        >
          <path
            d="M4 5L20 5"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19L20 19"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
