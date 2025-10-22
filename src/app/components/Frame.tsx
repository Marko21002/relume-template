/** @paper-design/shaders-react@0.0.60 */
import { SmokeRing } from "@paper-design/shaders-react";

/**
 * Code exported from Paper
 * https://app.paper.design/file/01K4WMD1T950PKFDN5FKXP5KA9?node=01K84NYSJYX1HWGRW1JE0TPJ94
 * on Oct 22, 2025 at 11:35 PM.
 */
export default function Frame() {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:w-[397px] min-h-screen lg:h-[1062px] bg-white flex flex-col items-center justify-start gap-8 p-4 lg:p-0 mx-auto">
      <SmokeRing
        speed={0.5}
        scale={0.8}
        thickness={0.65}
        radius={0.25}
        innerShape={0.7}
        noiseScale={3}
        noiseIterations={8}
        offsetX={0}
        offsetY={0}
        colors={["#FFFFFF"]}
        colorBack="#00000000"
        frame={99314.54999996419}
        className="self-stretch bg-black shrink-0 h-24 md:h-36 lg:h-[146px] w-auto"
      />
      <div className="w-full max-w-xs md:max-w-sm lg:w-[359px] flex flex-col items-center justify-start gap-12 md:gap-16 lg:gap-20 shrink-0 h-fit">
        <div className="flex flex-col items-center justify-start self-stretch shrink-0 h-fit w-auto gap-8 lg:gap-[38px]">
          <div className="flex flex-col items-center justify-start self-stretch shrink-0 h-fit w-auto gap-2 lg:gap-[10px]">
            <h1 className="text-black shrink-0 font-['Host_Grotesk',system-ui,sans-serif] text-xl md:text-2xl lg:text-[32px] font-extrabold h-fit leading-[150%] antialiased whitespace-pre w-fit">
              OVERDELIVER STUDIO
            </h1>
            <p className="text-black shrink-0 font-['HelveticaNeue','Helvetica_Neue',system-ui,sans-serif] text-sm md:text-base lg:text-[16px] font-normal h-fit tracking-[-0.02em] leading-[120%] antialiased text-center whitespace-pre-wrap w-full max-w-xs md:max-w-sm lg:w-[359px]">
              WE ARE A DIGITAL DESIGN STUDIO BUSY DESIGNING AND BUILDING BEST IN
              CLASS PRODUCTS, SERVICES, AND ECOMMERCE EXPERIENCES THAT CONNECT
              BRANDS TO THEIR CUSTOMERS
            </p>
          </div>
          <button className="flex items-start justify-start bg-black shrink-0 gap-0 h-fit py-2 px-6 md:py-3 md:px-8 lg:py-[12px] lg:px-[32px] w-fit">
            <span className="text-white shrink-0 font-[system-ui,sans-serif] text-sm md:text-base lg:text-[16px] font-normal h-fit leading-[150%] antialiased whitespace-pre w-fit">
              BOOK A CALL
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-start shrink-0 gap-6 md:gap-8 lg:gap-[32px] h-fit w-fit">
          <div
            className="bg-center bg-no-repeat bg-cover shrink-0 h-40 w-40 md:h-48 md:w-48 lg:h-[227px] lg:w-[227px] max-h-none max-w-none relative"
            style={{
              backgroundImage:
                'url("https://workers.paper.design/file-assets/01K4WMD1T950PKFDN5FKXP5KA9/01K84PN457YJ2REMQD0FKE2QP4.png")',
            }}
          />
          <div className="flex flex-col items-center justify-center shrink-0 gap-4 md:gap-5 lg:gap-[24px] h-fit w-fit">
            <h2 className="self-stretch text-black shrink-0 font-['Host_Grotesk',system-ui,sans-serif] text-lg md:text-xl lg:text-[24px] font-extrabold h-fit leading-[120%] antialiased text-center whitespace-pre-wrap w-auto">
              {"THE MISSION BEHIND\nOUR WORK"}
            </h2>
            <div className="flex flex-col items-center justify-start shrink-0 gap-4 md:gap-5 lg:gap-[24px] h-fit w-fit">
              <p className="text-black shrink-0 font-['HelveticaNeue','Helvetica_Neue',system-ui,sans-serif] text-sm md:text-base lg:text-[16px] font-normal h-fit leading-[150%] antialiased text-center whitespace-pre-wrap w-full max-w-xs md:max-w-sm lg:w-[349px]">
                {
                  "OUR MISSION IS TO DELIVER EXCEPTIONAL VALUE, BUILDING TRUE PARTNERSHIPS TO HELP OUR CLIENTS THRIVE IN THE DIGITAL LANDSCAPE.WE ARE COMMITTED TO THEIR GROWTH, ACTING AS A DEDICATED GUIDE ON THEIR JOURNEY TO SUCCESS.\n"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
