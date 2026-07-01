import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-neutral-50 h-screen w-screen overflow-hidden relative z-0">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="bg-orange-300 rounded-full w-40 h-40 mx-auto -mt-7 -top-10 -right-10 absolute"></div>
        <div className="bg-pink-300 w-32 h-32 rounded-3xl mx-auto absolute mt-10 rotate-15 -left-10"></div>
        <div className="bg-green-300 w-8 h-8 mx-auto [clip-path:polygon(50%_30%,0%_100%,100%_100%)] absolute mt-15 left-40 -rotate-15 "></div>
        <div className="border-pink-500 w-6 h-6 rounded-full border-5 bg-transparent absolute right-22 mt-35"></div>
        <div className="bg-blue-400 w-8 h-8  mx-auto absolute -rotate-45 mt-130 left-30"></div>
        <div className="bg-orange-300 w-10 h-3 rounded-full mx-auto absolute mt-125 right-60 -rotate-20 "></div>
      </div>
      <Outlet />
    </div>
  );
}
export default App;
