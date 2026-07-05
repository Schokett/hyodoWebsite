import starIcon from "../assets/star.svg";
import arrowIcon from "../assets/arrow.svg";

function Home() {
  return (
    <div className=" text-center ">
      <section className="">
        <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-4">
          <div className="lg:flex items-center gap-2 hidden ">
            <div className="bg-emerald-600 rounded-xl p-1 -rotate-10">
              <img
                src="logo.svg"
                alt="Logo"
                className="w-10 h-auto drop-shadow-md drop-shadow-slate-500/50"
              />
            </div>
            <p className="text-md font-medium text-neutral-700 ">hyodo.dev</p>
          </div>

          <nav className="gap-2 flex font-medium text-xs">
            <div className="bg-green-200 text-green-950 rounded-full p-1 px-2">
              <a href="" className="">
                projekte
              </a>
            </div>
            <div className="bg-red-200 text-red-950 rounded-full p-1 px-2">
              <a href="" className="über mich">
                über mich
              </a>
            </div>
            <div className="bg-indigo-200 text-indigo-950 rounded-full p-1 px-2">
              <a href="" className="kontakt">
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
      <section className="bg-amber-300 h-500">Hi hier bin ich</section>
    </div>
  );
}
export default Home;
