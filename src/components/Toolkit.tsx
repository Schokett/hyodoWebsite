import { StarIcon, CodeIcon, MagicIcon, FlashIcon } from "../components/icons";

function Toolkit() {
  return (
    <section className="px-10">
      <div className="max-w-100 lg:max-w-[90rem] mx-auto">
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 text-blue-500" />
          <p className="text-start text-slate-600/60 font-medium tracking-tight">mein toolkit</p>
        </div>
        <div className="grid grid-rows-3 lg:grid-cols-3 gap-10 mt-4">
          <div className="contrast-90 bg-violet-200 border-b-8 border-violet-900/20 rounded-2xl h-fit w-full p-7">
            <div className="bg-violet-950/50 w-fit rounded-lg p-3 ">
              <CodeIcon className="w-6 h-6 text-white stroke-2" />
            </div>
            <div className="text-start mt-4 gap-1 flex flex-col">
              <p className="text-slate-900/75 font-bold">React / TS</p>
              <span className="text-orange-900/60 font-semibold tracking-tight grayscale-70">
                schnelle builds
              </span>
            </div>
          </div>
          <div className="contrast-80 bg-emerald-300 border-b-8 border-emerald-900/20 rounded-2xl h-fit w-full p-7">
            <div className="bg-emerald-950/50 w-fit rounded-lg p-3 ">
              <MagicIcon className="w-6 h-6 text-white stroke-2" />
            </div>
            <div className="text-start mt-4 gap-1 flex flex-col">
              <p className="text-slate-900/75 font-bold ">Tailwind / CSS</p>
              <span className="text-orange-900/60 font-semibold tracking-tight grayscale-70">
                schnelle builds
              </span>
            </div>
          </div>
          <div className="contrast-80 bg-orange-300 border-b-8 border-orange-900/30 rounded-2xl h-fit w-full p-7">
            <div className="bg-orange-950/50 w-fit rounded-lg p-3 ">
              <FlashIcon className="w-6 h-6 text-white stroke-2" />
            </div>
            <div className="text-start mt-4 gap-1 flex flex-col">
              <p className="text-slate-900/75 font-bold ">Vite</p>
              <span className="text-orange-900/60 font-semibold tracking-tight grayscale-70">
                schnelle builds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Toolkit;
