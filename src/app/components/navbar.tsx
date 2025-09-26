export default function Navbar() {
  return (
    <div className="px-[5%] max-w-[1400px] mx-auto py-4 flex items-center justify-between">
      <img src="/overdeliver.png" alt="overdeliver" className="w-40 " />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#000000"}
        fill={"none"}
      >
        <path
          d="M20 12L10 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20 5L4 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20 19L4 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}
