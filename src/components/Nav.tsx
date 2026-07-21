function Nav() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-4 lg:mx-60">
      <div className="lg:flex items-center gap-2 place-items-center  ">
        <div className="bg-emerald-600/50 w-fit h-auto rounded-xl p-1 -rotate-10 ">
          <img
            src="logo.svg"
            alt="Logo"
            className="w-10 h-auto drop-shadow-md drop-shadow-slate-500/50 transition-all cursor-pointer hover:drop-shadow-emerald-600/90 hover:duration-300 "
          />
        </div>
        <p className="text-md font-medium text-neutral-700 ">hyodo.dev</p>
      </div>

      <nav className="gap-2 flex font-medium text-xs">
        <div className="bg-green-200 text-green-700 rounded-full p-2 sm:px-4 ">
          <a href="" className="text-lg font-medium grayscale-80">
            projekte
          </a>
        </div>
        <div className="bg-red-200 text-red-700 rounded-full p-2 sm:px-4">
          <a href="" className="text-lg font-medium grayscale-80">
            über mich
          </a>
        </div>
        <div className="bg-indigo-200 text-indigo-700 rounded-full p-2 sm:px-4">
          <a href="" className="text-lg font-medium grayscale-80">
            kontakt
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
