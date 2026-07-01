function Home() {
  return (
    <div className=" text-center ">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 rounded-xl p-1 -rotate-10">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-10 h-auto drop-shadow-md drop-shadow-slate-500/50"
            />
          </div>
          <p className="text-md font-medium text-neutral-700">hyodo.dev</p>
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
    </div>
  );
}
export default Home;
