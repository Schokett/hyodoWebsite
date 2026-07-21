import arrowIcon from "../assets/arrow.svg";
import { StarIcon } from "../components/icons";
function Hero() {
  return (
    <section className="mb-70">
      <div className="mt-15 flex items-center justify-center gap-1 text-xs font-medium text-pink-800 mb-4 bg-pink-200 rounded-full p-1 px-3 w-fit mx-auto -rotate-2">
        <StarIcon className="w-4 text-pink-800" />
        Jeder Pixel am richtigen Platz
      </div>
      <h2 className="lg:text-5xl text-xl font-medium">
        Hey, ich bin <span className="text-amber-600">Skrollan </span>ー<br />
        ich baue <span className="text-emerald-600">kreative</span> Webwelten
      </h2>
      <p className="text-slate-500 text-sm mt-2 px-20">
        Frontend-Entwicklerin mit Liebe zum Detail – für Code, der auf jedem Screen glänzt.
      </p>
      <div className="flex justify-center gap-5 lg:gap-10 mt-5">
        <button className=" bg-pink-600 border-b-5 border-pink-700 cursor-pointer text-red-50 text-sm font-medium p-2 px-3 flex gap-2 rounded-lg -rotate-1 transition-all duration-300 ease-out hover:bg-emerald-500 hover:border-emerald-600 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/50">
          projekte ansehen
          <img src={arrowIcon} alt="arrow" className="w-2 " />
        </button>
        <button className="text-emerald-600 font-medium border-emerald-500 border-2 text-sm p-2 px-3 flex gap-2 rounded-lg rotate-1 cursor-pointer transition-all duration-300 ease-out hover:border-pink-600 hover:text-pink-600 hover:-translate-y-0.5 hover:shadow-md hover:shadow-pink-500/50">
          sag hallo
        </button>
      </div>
    </section>
  );
}
export default Hero;
