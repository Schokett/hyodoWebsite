import starIcon from "../assets/star.svg";
import arrowIcon from "../assets/arrow.svg";

function Home() {
  return (
    <div className=" text-center ">
      <section className="mb-70">
        <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-4 mx-60">
          <div className="lg:flex items-center gap-2 hidden ">
            <div className="bg-emerald-600/50 rounded-xl p-2 -rotate-10">
              <img
                src="logo.svg"
                alt="Logo"
                className="w-12 h-auto drop-shadow-md drop-shadow-slate-500/50 transition-all cursor-pointer hover:drop-shadow-emerald-600/90 hover:duration-300 "
              />
            </div>
            <p className="text-md font-medium text-neutral-700 ">hyodo.dev</p>
          </div>

          <nav className="gap-2 flex font-medium text-xs">
            <div className="bg-green-200 text-green-700 rounded-full p-2 px-4">
              <a href="" className="text-lg font-medium grayscale-80">
                projekte
              </a>
            </div>
            <div className="bg-red-200 text-red-700 rounded-full p-2 px-4">
              <a href="" className="text-lg font-medium grayscale-80">
                über mich
              </a>
            </div>
            <div className="bg-indigo-200 text-indigo-700 rounded-full p-2 px-4">
              <a href="" className="text-lg font-medium grayscale-80">
                kontakt
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-15 flex items-center justify-center gap-2 text-xs font-medium text-neutral-700 mb-4 bg-pink-300 rounded-full p-1 px-3 w-fit mx-auto -rotate-2">
          <img src={starIcon} alt="" className="w-3" />
          Jeder Pixel am richtigen Platz
        </div>
        <h2 className="text-2xl font-medium">
          Hey, ich bin <span className="text-amber-600">Skrollan </span>ー<br />
          ich baue <span className="text-emerald-600">kreative</span> Webwelten
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          Frontend-Entwicklerin mit Liebe zum Detail – für Code, der auf jedem Screen glänzt.
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <button className="bg-pink-600 text-red-50 text-sm font-medium p-1 px-3 flex gap-2 rounded-lg -rotate-1">
            projekte ansehen
            <img src={arrowIcon} alt="arrow" className="w-2 " />
          </button>
          <button className=" text-emerald-600 font-medium border-emerald-500 border-2 text-sm p-1 px-3 flex gap-2 rounded-lg rotate-1">
            sag hallo
          </button>
        </div>
      </section>
      <section className="grid grid-row-3 lg:grid-cols-3 gap-10 mr-10 ml-10 mx-10 justify-items-center">
        <div className="bg-violet-400 rounded-2xl h-50 max-w-100 w-full"></div>
        <div className="bg-emerald-400 rounded-2xl h-50 max-w-100 w-full"></div>
        <div className="bg-orange-400 rounded-2xl h-50 max-w-100 w-full"></div>
      </section>
    </div>
  );
}
export default Home;
