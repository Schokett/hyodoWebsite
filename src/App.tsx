import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-neutral-50 h-screen w-screen overflow-hidden relative z-0">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="bg-orange-300 rounded-full mx-auto w-25 h-25 -mt-7 -top-2 -right-5 lg:w-40 lg:h-40 lg:-mt-7 lg:-top-10 lg:-right-10 absolute "></div>
        <div className="bg-pink-300  rounded-3xl mx-auto rotate-15 w-22 h-22 mt-10 -left-8 lg:w-32 lg:h-32  lg:mt-10 lg:-left-10 absolute"></div>
        <div className="bg-emerald-400 mx-auto -rotate-15 [clip-path:polygon(50%_30%,0%_100%,100%_100%)] w-5 h-5  left-22 lg:w-8 lg:h-8 mt-15 lg:left-40 absolute"></div>
        <div className="border-pink-400 rounded-full border-4 bg-transparent w-5 h-5 right-18 mt-25 lg:w-6 lg:h-6 lg:right-22 lg:mt-35 absolute"></div>
        <div className="bg-blue-400 mx-auto -rotate-45 w-4 h-4 mt-90 left-20 lg:w-8 lg:h-8 lg:mt-130 lg:left-30 absolute"></div>
        <div className="bg-orange-300 rounded-full -rotate-20 mx-auto w-6 h-2 mt-89 right-20 lg:w-10 lg:h-3 lg:mt-125 lg:right-60  absolute"></div>
      </div>
      <Outlet />
    </div>
  );
}
export default App;
